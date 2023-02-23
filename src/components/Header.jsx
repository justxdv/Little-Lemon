import MobileNavBar from "./navbar/MobileNavBar";
import DesktopNavBar from "./navbar/DesktopNavBar";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import CartButton from "./cart/CartButton";
import Container from "./Container";
const Header = () => {
  return (
    <header>
      <Container className="flex items-center justify-between py-2">
        <Link to="/">
          <Logo />
        </Link>
        <div className="flex gap-5 items-center">
          <DesktopNavBar />
          <CartButton />
          <MobileNavBar />
        </div>
      </Container>
    </header>
  );
};

export default Header;
