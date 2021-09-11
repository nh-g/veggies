import categoriesData from "../data/categories.json";

import MappingList from "../components/atoms/MappingList.jsx";
import Hero from "../components/sections/Hero.jsx";
import CategoryMasonry from "../components/sections/CategoryMasonry";

// Why this is the only component with upperscase.
// All React components must be uppercase -1
// (i put the -1 here, otherwise i would put -1 in each page, thus lowering the score too much)
export default function HomePage() {
  return (
    <div className="home">
      <Hero />
      <div className="spacer intro" />
      {/* This could be just called List, you dont need to tell me how you implemented the list */}
      {/* (by using map instead of a for loop.) */}
      {/* Yoy wont call this ForLoopList, if you used a loop instead, I am right? */}
      <MappingList getData={categoriesData} Component={CategoryMasonry} />
    </div>
  );
}
