import MappingList from "./atoms/MappingList";
import NavLink from "./NavLink";

const navLinks = [
  {
    title: "home",
    path: "/",
    isImage: true,
  },
  {
    title: "dishes",
    path: "/dishes",
    isImage: false,
  },
  {
    title: "dessert",
    path: "/dessert",
    isImage: false,
  },
  {
    title: "drinks",
    path: "/drinks",
    isImage: false,
  },
  {
    title: "contact",
    path: "/contact",
    isImage: false,
  },
];

export default function NavigationBar() {
  return (
    <nav className="nav-bar">
      <ul>
        <MappingList getData={navLinks} Component={NavLink} />
      </ul>
    </nav>
  );
}
