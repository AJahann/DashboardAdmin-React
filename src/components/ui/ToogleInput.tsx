interface ToggleInputProps {
  name: string;
  isActive: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelTitle: string;
  labelStyle?: string;
  containerStyle?: string;
}

const ToggleInput = ({
  labelTitle,
  labelStyle = "",
  containerStyle = "",
  isActive,
  handleChange,
  name,
}: ToggleInputProps) => {
  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="label cursor-pointer">
        <span className={`label-text text-base-content ${labelStyle}`}>
          {labelTitle}
        </span>
        <input
          name={name}
          checked={isActive}
          onChange={handleChange}
          type="checkbox"
          className="toggle"
        />
      </label>
    </div>
  );
};

export default ToggleInput;
