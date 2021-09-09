import { getCategories } from "../data/categories";
import { getDishes } from "../data/products";

import Header from "../components/sections/Header";
import MappingList from "../components/atoms/MappingList";
import Masonry from "../components/sections/Masonry";

export default function DishPage() {

  return (
    <div className="page-template dish">
      <Header item={getCategories()[0]} />
      <div className="spacer intro" />
      <div className="list">
        <MappingList getData={getDishes()} Component={Masonry} />
      </div>
    </div>
  );
}
 
