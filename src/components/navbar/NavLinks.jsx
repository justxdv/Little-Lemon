import { Link, useLocation } from "react-router-dom";

const NavLinks = ({ links }) => {
  return (
    <>
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.to}>{link.text}</Link>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
