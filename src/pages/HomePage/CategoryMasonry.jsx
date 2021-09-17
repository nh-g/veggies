import { Link } from "react-router-dom";

import ImageLoader from "../../shared/ImageLoader";

export default function CategoryMasonry({ item }) {
  const { urlParameter, title, description, imgFilePath } = item;
  return (

    <div className="masonry">
      <Link to={`/${urlParameter}`}>
        <div className="left-content">
          <ImageLoader filePath={imgFilePath} />
        </div>
      </Link>
      <div className="right-content">
        <h2>{title.toUpperCase()}</h2>
        <p>{description}</p>
        <Link to={`/${urlParameter}`}>
          <span className="cta">View {title.toUpperCase()}</span>
        </Link>
      </div>
    </div>
  );
}
