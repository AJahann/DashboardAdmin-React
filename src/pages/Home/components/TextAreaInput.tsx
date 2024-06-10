interface TextAreaInputProps {
  labelTitle: string;
  labelStyle?: string;
  containerStyle?: string;
  placeholder?: string;
}

const TextAreaInput = ({
  labelTitle,
  labelStyle = "",
  containerStyle = "",
  placeholder,
}: TextAreaInputProps) => {
  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="label">
        <span className={`label-text text-base-content ${labelStyle}`}>
          {labelTitle}
        </span>
      </label>
      <textarea
        className="textarea textarea-bordered w-full"
        placeholder={placeholder ?? ""}
      />
    </div>
  );
};

export default TextAreaInput;
