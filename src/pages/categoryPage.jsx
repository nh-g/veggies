import { getCategories } from "../data/categories";
// import { getDrinks } from "../data/products";
import { getProducts } from "../data/products";

import Header from "../components/sections/Header";
import MappingList from "../components/atoms/MappingList";
import CategoryMasonry from "../components/sections/CategoryMasonry";
import ProductMasonry from "../components/sections/ProductMasonry";

import { useParams } from "react-router-dom";

export default function CategoryPage() {

  const {category} = useParams();
  console.log("category");

    function selectCategory(key) {
      return getCategories().find((item) => {
        return item.title === key;
      });
    }

    const selectedCategory = selectCategory(category);
    console.log("selectedCategory", selectedCategory);


    function selectProducts(key) {
      return getProducts().filter((item) => {
        return item.category === key;
      });
    }

    const selectedProducts = selectProducts(category);
    console.log("selectedProducts", selectedProducts);

  return (
    <div className="page-template dish">
      <Header item={selectedCategory} />
      <div className="spacer" />
      <div className="list">
        <MappingList getData={selectedProducts} Component={ProductMasonry} />
      </div>
    </div>
  );
}
