import { getCategories } from "../data/categories";
import { getDessert } from "../data/products";

import Header from "../components/sections/Header";
import MappingList from "../components/atoms/MappingList";
import Masonry from "../components/sections/Masonry";

export default function CategoryPage() {
  return (
    <div className="page-template dish">
      <Header item={getCategories()[1]} />
      <div className="list">
        <MappingList getData={getDessert()} Component={Masonry} />
      </div>
    </div>
  );
}
