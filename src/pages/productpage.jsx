import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { getProducts } from '../data/products';
import ImageLoader from '../components/ImageLoader';
import Ingredients from "../components/sections/Ingredients";
import NutritionFacts from '../components/sections/NutritionFacts';

export default function ProductPage() {
    const {category} = useParams()
    const {product_id} = useParams()

    const idNumber = Number.parseInt(product_id);

    function selectItem(id) {
    return getProducts().find((item) => {
      return item.id === id;
    });
    }
    const selectedItem = selectItem(idNumber);
    console.log("selectedItem", selectedItem);

    const { imgFilePath, title, description, ingredients } = selectedItem;


    return (
      <div className="product-page">
        <ImageLoader filePath={imgFilePath} />
        <h1>{title.toUpperCase()}</h1>
        <div className="description">{description}</div>
        <br />
        <section className="row">
          <Ingredients item={ingredients} />
        </section>
        <br />
        <NutritionFacts product={selectedItem} />
        <br />
        <Link to={`/${category}`}>
          <span className="cta">Back to {category.toUpperCase()}</span>
        </Link>
      </div>
    );
}
