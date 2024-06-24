import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import InputText from "../../components/InputText";
import { adminsApi } from "../../services/axions/api";
import type { AppDispatch } from "../../store/Store";
import { closeModal } from "../modal/Modal";

const initialValues = {
  name: "",
  lastName: "",
  phone: "",
  password: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  phone: Yup.string()
    .required("This field is required")
    .matches(/^[0-9]{11}$/, "Invalid phone number"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("This field is required"),
});

const AddUserModalBody = () => {
  const dispatch = useDispatch<AppDispatch>();

  const form = useFormik({
    validationSchema,
    initialValues,
    onSubmit: async (values) => {
      try {
        const response = await adminsApi.post("/create-user", {
          phone: values.phone,
          pasword: values.password,
          user_metadata: {
            name: values.name,
            lastName: values.lastName,
          },
        });

        const data = await response.data;

        if (response.status === 200) {
          console.log("Admin created successfully:", data);
        } else {
          throw new Error(data.error);
        }
      } catch (error) {
        console.error("Error creating user:", error);
      }

      dispatch(closeModal());
      setTimeout(() => {
        form.setSubmitting(false);
      }, 5000);
    },
  });

  return (
    <form onSubmit={form.handleSubmit}>
      <div className="mb-4">
        <InputText
          value={form.values.name}
          changeHandle={form.handleChange}
          name="name"
          type="text"
          containerStyle="mt-4"
          labelTitle="Name"
        />
        <p className="mt-2 text-red-300 text-sm">
          {form.touched.name ? form.errors.name : null}
        </p>
        <InputText
          value={form.values.lastName}
          changeHandle={form.handleChange}
          name="lastName"
          type="text"
          containerStyle="mt-4"
          labelTitle="Last Name"
        />
        <p className="mt-2 text-red-300 text-sm">
          {form.touched.lastName ? form.errors.lastName : null}
        </p>

        <InputText
          changeHandle={form.handleChange}
          value={form.values.phone}
          name="phone"
          type="text"
          containerStyle="mt-4"
          labelTitle="Phone"
        />

        <p className="mt-2 text-red-300 text-sm">
          {form.touched.phone ? form.errors.phone : null}
        </p>

        <InputText
          value={form.values.password}
          changeHandle={form.handleChange}
          name="password"
          type="password"
          containerStyle="mt-4"
          labelTitle="Password"
        />

        <p className="mt-2 text-red-300 text-sm">
          {form.touched.password ? form.errors.password : null}
        </p>
      </div>

      <div className="modal-action">
        <button
          className="btn btn-ghost"
          onClick={() => dispatch(closeModal())}
        >
          Cancel
        </button>
        <button
          disabled={form.isSubmitting}
          type="submit"
          className="btn btn-primary px-6"
        >
          {form.isSubmitting ? "Loading..." : "Add"}
        </button>
      </div>
    </form>
  );
};

export default AddUserModalBody;
