import { useDispatch, useSelector } from "react-redux";

import AddAdminModalBody from "../features/admins/AddAdminModalBody";
import { closeModal, modalStatus } from "../features/modal/Modal";
import type { AppDispatch } from "../store/Store";

const ModalLayout = () => {
  const isOpen = useSelector(modalStatus);
  const dispatch = useDispatch<AppDispatch>();

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
          Add New Admin
        </h3>
        <AddAdminModalBody />
      </div>
    </div>
  );
};

export default ModalLayout;
