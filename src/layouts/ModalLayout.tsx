import { useState } from "react";

import AddAdminModalBody from "../features/admins/AddAdminModalBody";

const ModalLayout = () => {
  const [isOpen] = useState(false);

  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={() => close()}
        >
          ✕
        </button>
        <h3 className="font-semibold text-2xl pb-6 text-center">{"title"}</h3>
        <AddAdminModalBody />
      </div>
    </div>
  );
};

export default ModalLayout;
