import NavLinks from "./NavLinks";

const DesktopNavBar = () => {
  const links = [
    { to: "/", text: "Home" },
    { to: "/#", text: "About" },
    { to: "/#", text: "Menu" },
    { to: "/reservations", text: "Reservations" },
  ];
  return (
    <nav className="hidden sm:block">
      <ul className="flex items-center gap-4 text-md font-bold">
        <NavLinks links={links} />
      </ul>
    </nav>
  );
};

export default DesktopNavBar;
