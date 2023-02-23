import { useState, useRef } from "react";
import HamburgerIcon from "../icons/HamburgerIcon";
import NavLinks from "./NavLinks";
const MobileNavBar = () => {
  const links = [
    { to: "/", text: "Home" },
    { to: "/#", text: "About" },
    { to: "/#", text: "Menu" },
    { to: "/reservations", text: "Reservations" },
  ];
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenMenu = () => {
    setIsOpen(true);
    document.addEventListener("click", handleClickOutsideNav);
  };
  const handleClickOutsideNav = (event) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target) &&
      event.target !== hamburgerRef.current &&
      !hamburgerRef.current.contains(event.target)
    ) {
      closeNav();
    }
  };
  const closeNav = () => {
    setIsOpen(false);
    document.removeEventListener("click", handleClickOutsideNav);
  };
  return (
    <div className="sm:hidden">
      <button
        className="cursor-pointer flex items-center justify-center h-12 w-12"
        onClick={handleOpenMenu}
        ref={hamburgerRef}
      >
        <HamburgerIcon />
      </button>
      <nav
        className={`fixed top-0 right-0 flex flex-col gap-4 px-8 py-4 w-64 bg-primary min-h-screen transition-transform
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        ref={navRef}
      >
        <button
          className="text-white font-bold text-xl ml-auto rounded-full bg-secondary w-9 h-9"
          onClick={closeNav}
        >
          X
        </button>
        <ul className="flex flex-col gap-4 text-lg font-bold text-white">
          <NavLinks links={links}/>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavBar;
