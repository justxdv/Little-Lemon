import React from "react";
import ErrorMessage from "./ErrorMessage";
const SelectInput = ({ label, id, options, value, onChange, error }) => {
  const handleChange = (event) => {
    event.target.value === defaultOption
      ? onChange("")
      : onChange(event.target.value);
  };
  const defaultOption = "Select an option";
  const allOptions = [defaultOption, ...options];
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1 text-gray-800 font-semibold">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={handleChange}
        className={`border-2 border-grey-200 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:border-primary hover:border-primary focus:outline-none ${
          error ? "border-red-500 focus:border-red-500" : ""
        }`}
      >
        {allOptions.map((option) => (
          <option key={option} value={option} className="text-gray-800">
            {option}
          </option>
        ))}
      </select>
      <ErrorMessage>{error}</ErrorMessage>
    </div>
  );
};
export default SelectInput;
