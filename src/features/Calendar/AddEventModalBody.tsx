import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import InputText from "../../components/InputText";
import type { AppDispatch, RootState } from "../../store/Store";
import supabase from "../../utils/supapase";
import { closeModal } from "../modal/Modal";

const initialValues = {
  eventTitle: "",
};

const AddEventModalBody = () => {
  const calendarState = useSelector((state: RootState) => state.calendar);
  const dispatch = useDispatch<AppDispatch>();

  const form = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const { eventTitle } = values;
      const { date } = calendarState;
      const user = await supabase.auth.getUser();

      const { error } = await supabase
        .from("Events")
        .insert([
          {
            title: eventTitle,
            event_date: date,
            created_by: user.data.user?.email,
          },
        ])
        .select();

      if (error) {
        toast.error("Oops check your conection or move out :))");
      } else {
        toast.success("Event added successfully");
        toast("Refresh page", { duration: 4000 });
        dispatch(closeModal());
      }
    },
  });

  return (
    <form onSubmit={form.handleSubmit}>
      <div className="mb-4">
        <InputText
          value={form.values.eventTitle}
          changeHandle={form.handleChange}
          name="eventTitle"
          type="text"
          containerStyle="mt-4"
          labelTitle="Event Title"
        />
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

export default AddEventModalBody;
