import logoLarge from "../assets/images/logo/logo-large.png";
import logoMedium from "../assets/images/logo/logo-medium.png";
import logoSmall from "../assets/images/logo/logo-small.png";

const Logo = () => (
  <picture >
    <source media="(min-width: 1024px)" srcSet={logoLarge} />
    <source media="(min-width: 480px)" srcSet={logoMedium} />
    <source media="(max-width: 479px)" srcSet={logoSmall} />
    <img className="h-12" src={logoLarge} alt="Logo" />
  </picture>
);

export default Logo;
