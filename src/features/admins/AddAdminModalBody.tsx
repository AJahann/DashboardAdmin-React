import InputText from "../../components/InputText";

const AddAdminModalBody = () => {
  return (
    <>
      <InputText
        type="text"
        containerStyle="mt-4"
        labelTitle="First Name"
        value=" "
        changeHandle={() => {}}
      />
      <InputText
        type="text"
        containerStyle="mt-4"
        labelTitle="Last Name"
        value=" "
        changeHandle={() => {}}
      />
      <InputText
        type="email"
        containerStyle="mt-4"
        labelTitle="Email Id"
        value=" "
        changeHandle={() => {}}
      />

      {/* <ErrorText styleClass="mt-16">{errorMessage}</ErrorText> */}
      <div className="modal-action">
        <button className="btn btn-ghost">Cancel</button>
        <button className="btn btn-primary px-6">Save</button>
      </div>
    </>
  );
};

export default AddAdminModalBody;
