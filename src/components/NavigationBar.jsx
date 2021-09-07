import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Dish",
    path: "/dish",
  },
  {
    title: "Dessert",
    path: "/dessert",
  },
  {
    title: "Drinks",
    path: "/drinks",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default function Navigation() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className="header">
      <Link to="/">
        <img
          className="brand "
          src={require("../assets/images/logo/veggie50.svg").default}
          alt="Logo"
        />
      </Link>
      <div className={`nav-list ${menuActive && "active"}`}>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path} onClick={() => setMenuActive(!menuActive)}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="menu" onClick={() => setMenuActive(!menuActive)}>
        <div className="bar"></div>
      </div>
    </div>
  );
}
