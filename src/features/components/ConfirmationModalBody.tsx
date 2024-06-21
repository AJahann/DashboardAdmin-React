const ConfirmationModalBody = () => {
  const closeModal = () => {};

  const proceedWithYes = () => {};

  return (
    <>
      <p className=" text-xl mt-8 text-center">{"message"}</p>

      <div className="modal-action mt-12">
        <button className="btn btn-outline   " onClick={() => closeModal()}>
          Cancel
        </button>

        <button
          className="btn btn-primary w-36"
          onClick={() => proceedWithYes()}
        >
          Yes
        </button>
      </div>
    </>
  );
};

export default ConfirmationModalBody;
