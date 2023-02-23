import React from "react"

const PrimaryButton = ({ children, className, onClick }) => (
  <button
    className={`bg-secondary font-bold text-black px-4 py-2 rounded-lg hover:bg-primary hover:text-white 
    md:text-xl md:px-6 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default PrimaryButton;
