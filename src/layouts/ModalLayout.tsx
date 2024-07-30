import { useDispatch, useSelector } from "react-redux";

import AddAdminModalBody from "../features/admins/AddAdminModalBody";
import AddEventModalBody from "../features/Calendar/AddEventModalBody";
import { closeModal } from "../features/modal/Modal";
import AddUserModalBody from "../features/users/AddUserModalBody";
import type { AppDispatch, RootState } from "../store/Store";

const ModalLayout = () => {
  const modalConfig = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch<AppDispatch>();

  const isOpen = modalConfig.status;
  const modalFor = modalConfig.modalFor;

  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={() => dispatch(closeModal())}
        >
          ✕
        </button>
        <h3 className="font-semibold text-2xl pb-6 text-center">
          {modalFor === "ADD_NEW_ADMIN" && "Add New Admin"}
          {modalFor === "ADD_NEW_USER" && "Add New User"}
          {modalFor === "ADD_NEW_EVENT" && "Add New Event"}
          {modalFor === "NOT_ACCESS" && "Oops!! you must be OWNER"}
        </h3>

        {modalFor === "ADD_NEW_ADMIN" && <AddAdminModalBody />}
        {modalFor === "ADD_NEW_USER" && <AddUserModalBody />}
        {modalFor === "ADD_NEW_EVENT" && <AddEventModalBody />}
      </div>
    </div>
  );
};

export default ModalLayout;
