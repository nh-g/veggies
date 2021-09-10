import { Link } from "react-router-dom";
import categoriesData from "../data/categories.json"
import productsData from "../data/products.json";

import Header from "../components/sections/Header";
import MappingList from "../components/atoms/MappingList";
import ProductMasonry from "../components/sections/ProductMasonry";

import { useParams } from "react-router-dom";

export default function CategoryPage() {

  const {category} = useParams();
  console.log("category");

    function selectCategory(key) {
      return categoriesData.find((item) => {
        return item.title === key;
      });
    }

    const selectedCategory = selectCategory(category);
    console.log("selectedCategory", selectedCategory);


    function selectProducts(key) {
      return productsData.filter((item) => {
        return item.category === key;
      });
    }

    const selectedProducts = selectProducts(category);
    console.log("selectedProducts", selectedProducts);

  return (
    <div className="page-template">
      <Header item={selectedCategory} />
      <div className="spacer" />
      <div className="list">
        <MappingList getData={selectedProducts} Component={ProductMasonry} />
      </div>
      <Link to={`/`}>
        <div style={{textAlign:"center"}}>
          <span className="cta"> ⬅  Back to HOME </span>
        </div>
      </Link>
    </div>
  );
}
