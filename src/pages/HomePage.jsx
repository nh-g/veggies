import categoriesData from "../data/categories.json";

import MappingList from "../components/atoms/MappingList.jsx";
import Hero from "../components/sections/Hero.jsx";
import CategoryMasonry from "../components/sections/CategoryMasonry";
export default function HomePage() {
  return (
    <div className="home">
      <Hero />
      <div className="spacer intro" />
      <MappingList getData={categoriesData} Component={CategoryMasonry} />
    </div>
  );
}
