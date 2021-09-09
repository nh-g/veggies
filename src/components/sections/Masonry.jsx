import { Link } from "react-router-dom";

import ImageLoader from "../ImageLoader";

export default function Masonry({ item }) {
  const { urlParameter, title, description, imgFilePath } = item;
  return (
    // TASK :Fix Link to product page 

    <div className="masonry">
      <Link to={`/categories/${urlParameter}`}>
        <div className="left-content">
          <ImageLoader filePath={imgFilePath} />
        </div>
      </Link>
      <div className="right-content">
        <h2>{title.toUpperCase()}</h2>
        <p>{description}</p>
        <Link to={`/categories/${urlParameter}`}>
          <span className="cta">View {title.toUpperCase()}</span>
        </Link>
      </div>
    </div>
  );
}
