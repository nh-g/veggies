import categoriesData from "../CategoryPages/categories.json";

import MappingList from "../../components/atoms/MappingList.jsx";
import Hero from "./Hero.jsx";
import CategoryMasonry from "./CategoryMasonry";
export default function HomePage() {
  return (
    <div className="home">
      <Hero />
      <div className="spacer intro" />
      <MappingList getData={categoriesData} Component={CategoryMasonry} />
    </div>
  );
}
