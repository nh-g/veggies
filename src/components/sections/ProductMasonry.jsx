import { Link } from "react-router-dom";

import ImageLoader from "../ImageLoader";

export default function ProductMasonry({ item }) {
  const { category, id , title, description, imgFilePath } = item;
  return (

    <div className="masonry">
      <Link to={`/${category}/${id}`}>
        <div className="left-content">
          <ImageLoader filePath={imgFilePath} />
        </div>
      </Link>
      <div className="right-content">
        <h2>{title.toUpperCase()}</h2>
        <p>{description}</p>
        <Link to={`/${category}/${id}`}>
          <span className="cta">View {title.toUpperCase()}</span>
        </Link>
      </div>
    </div>
  );
}
