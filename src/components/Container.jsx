const Container = ({ children, className }) => (
  <div
    className={`max-w-sm w-11/12 mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-7xl ${className}`}
  >
    {children}
  </div>
);

export default Container;
