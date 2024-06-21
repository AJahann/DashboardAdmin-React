import { useState } from "react";

import ConfirmationModalBody from "../features/components/ConfirmationModalBody";

const ModalLayout = () => {
  const [isOpen] = useState(true);

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

        <ConfirmationModalBody />
      </div>
    </div>
  );
};

export default ModalLayout;
