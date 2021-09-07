import { Link } from "react-router-dom";

import ImageLoader from "../ImageLoader";

export default function CategoryMasonry({ item }) {
  const { title, description, imgFilePath } = item;
  return (
    <div className="category-masonry">
      <Link to={`/categories/${title}`}>
        <ImageLoader filePath={imgFilePath} />
      </Link>
      <div className="right-content">
        <h2>{title.toUpperCase()}</h2>
        <p>{description}</p>
        <Link to={`/categories/${title}`}>
          <span className="cta">View {title.toUpperCase()}</span>
        </Link>
      </div>
    </div>
  );
}
