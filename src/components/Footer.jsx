import NavLinks from "./navbar/NavLinks";
import Container from "./Container";
import SocialMedia from "./navbar/SocialMedia";

const links = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/menu", text: "Menu" },
  { to: "/reservations", text: "Reservations" },
];
const Footer = () => (
  <footer className="bg-primary py-8 text-white">
    <Container className="flex flex-col items-center gap-6">
      <ul className="text-xl font-bold text-center flex flex-col gap-2">
        <NavLinks links={links} />
      </ul>
      <SocialMedia />
      <p>© 2023 Little Lemon Restaurant</p>
    </Container>
  </footer>
);

export default Footer;
