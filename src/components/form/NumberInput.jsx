import React from "react";
import ErrorMessage from "./ErrorMessage";
const NumberInput = ({
  label,
  id,
  placeholder,
  min,
  max,
  value,
  onChange,
  error,
}) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1 text-gray-800 font-semibold">
        {label}
      </label>
      <input
        type="number"
        id={id}
        placeholder={placeholder}
        min={min}
        value={value}
        onChange={handleChange}
        className={`border-2 border-gray-200 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:border-primary hover:border-primary focus:outline-none ${
          error ? "border-red-500 focus:border-red-500" : ""
        }`}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </div>
  );
};
export default NumberInput;
