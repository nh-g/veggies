import logo from "../assets/images/brand/veggie50.svg";
import { Link } from "react-router-dom";

export default function NavLink({ item: {title, path, isImage } }) {
  const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);
  
  return (
    <li className={`nav-item ${title}-item`}>
      <Link to={path}>
        <a>
          {isImage ? (
            <img className="logo" src={logo} alt="Logo" />
          ) : (
            capitalizedTitle
          )}
        </a>
      </Link>
    </li>
  );
}
