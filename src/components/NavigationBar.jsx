import MappingList from "./atoms/MappingList";
import NavLink from "./NavLink";

const navLinks = [
  {
    title: "home",
    path: "/",
    isImage: true,
  },
  {
    title: "dish",
    path: "/dish",
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
        {/* Nice! */}
        {/* I will explain a folder structure trick, that will make easier to put the navLinks object as a separate json */}
        <MappingList getData={navLinks} Component={NavLink} />
      </ul>
    </nav>
  );
}
