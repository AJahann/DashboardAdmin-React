interface ToggleInputProps {
  labelTitle: string;
  labelStyle?: string;
  containerStyle?: string;
}

const ToggleInput = ({
  labelTitle,
  labelStyle = "",
  containerStyle = "",
}: ToggleInputProps) => {
  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="label cursor-pointer">
        <span className={`label-text text-base-content ${labelStyle}`}>
          {labelTitle}
        </span>
        <input type="checkbox" className="toggle" />
      </label>
    </div>
  );
};

export default ToggleInput;
