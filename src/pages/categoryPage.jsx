import { Link } from "react-router-dom";
import categoriesData from "../data/categories.json";
import productsData from "../data/products.json";

import Header from "../components/sections/Header";
import MappingList from "../components/atoms/MappingList";
import ProductMasonry from "../components/sections/ProductMasonry";

import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { category } = useParams();

  /**
   * Hoisting: how to structure a React component
   * 1. constants must be placed on the top
   * 2. methods in the middle
   * 3. components if created here and only used here, after methods, otherwise extracted and put as a separate file
   * 4. the return JSX
   */
  const selectedCategory = selectCategory(category);
  function selectCategory(key) {
    return categoriesData.find((item) => {
      return item.title === key;
    });
  }

  const selectedProducts = selectProducts(category);
  function selectProducts(key) {
    return productsData.filter((item) => {
      return item.category === key;
    });
  }

  return (
    <div className="page-template">
      <Header item={selectedCategory} />
      <div className="spacer" />
      <div className="list">
        <MappingList getData={selectedProducts} Component={ProductMasonry} />
      </div>
      {/* use back ticks when you want to concatenate info */}
      {/* othwerwsie use just "" */}
      <Link to={"/"}>
        <div style={{ textAlign: "center" }}>
          <span className="cta">Back to HOME</span>
        </div>
      </Link>
    </div>
  );
}
