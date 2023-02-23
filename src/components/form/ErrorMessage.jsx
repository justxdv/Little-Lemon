import React from "react";
const ErrorMessage = (props) => {
  const { children } = props;
  return <small className="text-red-500 font-bold pl-2 pt-2" {...props}>{children}</small>;
};
export default ErrorMessage;
