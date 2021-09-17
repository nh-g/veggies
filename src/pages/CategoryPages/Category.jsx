import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import categoriesData from "./categories.json";
import productsData from "../ProductPages/products.json";
import Header from "./Header";
import MappingList from "../../components/atoms/MappingList";
import ProductMasonry from "./ProductMasonry";

export default function CategoryPage() {
  const { category } = useParams();

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
    <div className="category-page">
      <Header item={selectedCategory} />
      <div className="spacer" />
      <div className="list">
        <MappingList getData={selectedProducts} Component={ProductMasonry} />
      </div>
      <Link to="/">
        <div style={{ textAlign: "center" }}>
          <span className="cta">Back to HOME</span>
        </div>
      </Link>
    </div>
  );
}
