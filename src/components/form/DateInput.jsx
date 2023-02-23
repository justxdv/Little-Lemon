import React from "react";
import ErrorMessage from "./ErrorMessage";
const DateInput = ({ label, id, onChange, value, min, error }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1 text-gray-800 font-semibold">
        {label}
      </label>
      <input
        type="date"
        id={id}
        value={value}
        onChange={handleChange}
        min={min}
        className={`border-2 border-gray-200 rounded-lg py-2 px-3 text-gray-700 leading-tight hover:border-primary focus:border-primary focus:outline-none ${
          error ? "border-red-500 focus:border-red-500" : ""
        }`}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </div>
  );
};
export default DateInput;
