
const FilterCheckbox = ({ label, checked, onChange, id }) => {
  return (
    <label htmlFor={id} className="flex gap-2 items-center text-sm font-light text-gray-700 cursor-pointer">
      <input
        id={id}
        className="w-3"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default FilterCheckbox;

