import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import productsData from "../data/products.json";

import ImageLoader from "../components/ImageLoader";
import Ingredients from "../components/sections/Ingredients";
import NutritionFacts from "../components/sections/NutritionFacts";

export default function ProductPage() {
  const { category } = useParams();
  const { product_id } = useParams();

  const idNumber = Number.parseInt(product_id);
  const selectedItem = selectItem(idNumber);

  function selectItem(key) {
    return productsData.find((item) => {
      return item.id === key;
    });
  }

  const { imgFilePath, title, description, ingredients } = selectedItem;

  return (
    <div className="product-page">
      {/* header */}
      <ImageLoader filePath={imgFilePath} />
      <h2>{title.toUpperCase()}</h2>
      <div className="description">{description}</div>

      {/* CSS  -1 */}
      {/* You could have wrapped the header in the <header> tag */}
      {/* And then add margin bottom to <header>, <section> and <NutritionFacts> too achieve the same effect */}
      <br />

      <section className="row">
        <Ingredients item={ingredients} />
      </section>
      <br />

      <NutritionFacts product={selectedItem} />
      <br />

      <Link to={`/${category}`}>
        <div>
          <span className="cta">Back to {category.toUpperCase()}</span>
        </div>
      </Link>
    </div>
  );
}
