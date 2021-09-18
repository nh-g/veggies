// NPM packages
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

// project files
import productsData from "./products.json";
import ImageLoader from "../../shared/ImageLoader";
import Ingredients from "./Ingredients";
import NutritionFacts from "./NutritionFacts";

export default function ProductPage() {
  const { category } = useParams();
  const { product_id } = useParams();

  const idNumber = Number.parseInt(product_id);

  const selectedItem = productsData.find((item) => {
    return item.id === idNumber;
  });

  const { imagePath, title, description, ingredients } = selectedItem;

  return (
    <div className="product-page">
      <header>
        <ImageLoader filePath={imagePath} />
        <h2>{title.toUpperCase()}</h2>
        <div className="description">{description}</div>
      </header>

      <section className="row">
        <Ingredients item={ingredients} />
      </section>

      <NutritionFacts product={selectedItem} />

      <Link to={`/${category}`}>
        <div>
          <span className="cta">Back to {category.toUpperCase()}</span>
        </div>
      </Link>
    </div>
  );
}
