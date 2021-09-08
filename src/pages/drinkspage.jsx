import { getCategories } from "../data/categories";
import { getDrinks } from "../data/products";

import Header from "../components/sections/Header";
import MappingList from "../components/atoms/MappingList";
import Masonry from "../components/sections/Masonry";

export default function CategoryPage() {
  return (
    <div className="page-template dish">
      <Header item={getCategories()[2]} />
      <div className="list">
        <MappingList getData={getDrinks()} Component={Masonry} />
      </div>
    </div>
  );
}
