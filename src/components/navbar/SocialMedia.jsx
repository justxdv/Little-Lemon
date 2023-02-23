import { Link } from "react-router-dom";
import InstagramIcon from "../icons/InstagramIcon";
import TwitterIcon from "../icons/TwitterIcon";
import FacebookIcon from "../icons/FacebookIcon";
const SocialMedia = ({ className }) => {
  return (
    <ul className={`flex items-center justify-center gap-4 ${className}`}>
      <li>
        <a href="#">
          <InstagramIcon className="fill-white hover:fill-secondary" />
        </a>
      </li>
      <li>
        <a href="#">
          <TwitterIcon className="fill-white hover:fill-secondary" />
        </a>
      </li>
      <li>
        <a href="#">
          <FacebookIcon className="fill-white hover:fill-secondary" />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
