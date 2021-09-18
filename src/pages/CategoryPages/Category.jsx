// NPM packages
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

// project files
import categoriesData from "./categories.json";
import productsData from "../ProductPages/products.json";
import Header from "./Header";
import MappingList from "../../shared/MappingList";
import ProductMasonry from "./ProductMasonry";

export default function CategoryPage() {
  const { category } = useParams();

  const selectedCategory = categoriesData.find((item) => {
    return item.title === category;
  });

  const selectedProducts = productsData.filter((item) => {
    return item.category === category;
  });

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
