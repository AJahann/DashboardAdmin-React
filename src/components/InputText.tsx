interface InputTextProps {
  type: string;
  value: string;
  changeHandle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  labelTitle: string;
  containerStyle?: string;
}

const InputText = (props: InputTextProps) => {
  const { labelTitle, containerStyle, type, value, changeHandle, name } = props;
  return (
    <div className={`form-control w-full ${containerStyle ?? ""}`}>
      <label className="label">
        <span className="label-text text-base-content">{labelTitle}</span>
      </label>
      <input
        value={value}
        onChange={changeHandle}
        name={name}
        type={type}
        className="input  input-bordered w-full "
      />
    </div>
  );
};

export default InputText;
