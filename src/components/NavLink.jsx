import logo from "../assets/images/logo/veggie50.svg";
import { Link } from "react-router-dom";

export default function NavLink({ item: {title, path, isImage } }) {
  return (
    <li className={`nav-item ${title}-item`}>
      <Link to={path}>
        <a>
        {isImage ? (
          <img className="logo" src={logo} alt="Logo" />
        ) : (
          title.toUpperCase()
        )}
        </a>
      </Link>
    </li>
  );
}
