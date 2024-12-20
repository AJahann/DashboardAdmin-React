/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";

import ErrorAlert from "../../components/ErrorAlert";
import InputText from "../../components/InputText";
import Loading from "../../components/Loading";
import TitleCard from "../../components/ui/TitleCard";
import ToogleInput from "../../components/ui/ToogleInput";
import UserService from "../../services/UserService";
import supabase from "../../utils/supapase";

const initValues = {
  name: "",
  lastName: "",
  email: "",
  role: "",
  place: "",
  active: true,
};

const userNewInitValue = (data: any) => {
  const { email, user_metadata } = data.data.user ?? {};
  const { is_admin, is_owner, assignedTo, lastName, name, status } =
    user_metadata ?? {};

  return {
    name: name || "",
    lastName: lastName || "",
    email: email || "",
    role: is_admin ? "Admin" : is_owner ? "Owner" : "",
    place: assignedTo || "",
    active: status === "active",
  };
};

const Profile = () => {
  const [formInitValues, setFormInitValues] = useState(initValues);

  const { isLoading, error, data } = useQuery({
    queryKey: "user",
    queryFn: () => supabase.auth.getUser(),
    onSuccess: (userData) => {
      setFormInitValues(userNewInitValue(userData));
    },
  });

  const form = useFormik({
    initialValues: formInitValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      if (data?.data.user?.id) {
        const req = await UserService.updateAdmin(data.data.user.id, values);

        if (req.user.id) {
          toast.success("Every thing up to DATE!");
        }
      }
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorAlert />;
  }

  return (
    <TitleCard title="Profile Settings" topMargin="mt-2">
      <form onSubmit={form.handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputText
            name="name"
            type="text"
            value={form.values.name}
            changeHandle={form.handleChange}
            labelTitle="Name"
          />
          <InputText
            name="lastName"
            type="text"
            value={form.values.lastName}
            changeHandle={form.handleChange}
            labelTitle="Last Name"
          />
          <InputText
            name="email"
            type="email"
            value={form.values.email}
            changeHandle={form.handleChange}
            labelTitle="Email"
          />
          <InputText
            name="place"
            type="text"
            value={form.values.place}
            changeHandle={form.handleChange}
            labelTitle="Assigned To"
          />
          <InputText
            name="role"
            type="text"
            value={form.values.role}
            changeHandle={(prevValue) => {
              return prevValue;
            }}
            labelTitle="Role"
          />
        </div>
        <div className="divider" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ToogleInput
            name="active"
            isActive={form.values.active}
            handleChange={form.handleChange}
            labelTitle="Active Status"
          />
        </div>

        <div className="mt-16">
          <button
            disabled={form.isSubmitting}
            type="submit"
            className="btn btn-primary float-right"
          >
            {form.isSubmitting ? "Updating..." : "Update"}
          </button>
        </div>
      </form>
    </TitleCard>
  );
};

export default Profile;
