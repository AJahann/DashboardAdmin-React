import { useDispatch } from "react-redux";

import CalendarView from "../../components/CalendarView";
import { openModal } from "../../features/modal/Modal";
import type { AppDispatch } from "../../store/Store";

const Calendar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const openModalHandle = () => {
    dispatch(openModal("ADD_NEW_EVENT"));
  };

  return <CalendarView openModalHandle={openModalHandle} />;
};

export default Calendar;
