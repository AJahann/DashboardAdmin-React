interface SearchBarProps {
  styleClass: string;
  placeholderText?: string;
}

const SearchBar = ({ styleClass, placeholderText }: SearchBarProps) => {
  return (
    <div className={`inline-block ${styleClass}`}>
      <div className="input-group  relative flex flex-wrap items-stretch w-full ">
        <input
          type="search"
          placeholder={placeholderText ?? "Search"}
          className="input input-sm input-bordered  w-full max-w-xs"
        />
      </div>
    </div>
  );
};

export default SearchBar;
