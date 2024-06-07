interface InputTextProps {
  labelTitle: string;
  containerStyle?: string;
  type?: string;
}

const InputText = (props: InputTextProps) => {
  const { labelTitle, containerStyle, type } = props;
  return (
    <div className={`form-control w-full ${containerStyle ?? ""}`}>
      <label className="label">
        <span className="label-text text-base-content">{labelTitle}</span>
      </label>
      <input type={type ?? "text"} className="input  input-bordered w-full " />
    </div>
  );
};

export default InputText;
