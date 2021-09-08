
import ImageLoader from "../ImageLoader";
export default function Header({item}) {
    const {title, imgFilePath, description } = item
    // const headerWrapper = <ImageLoader filePath={imgFilePath} />;
    // const url = `url("../../assets/images/${imgFilePath}")`
    // console.log("URL", url)

    // const imageBackground = {
    //   backgroundImage: `url("${require(`../../assets/images/${imgFilePath}`)}")`
    // };
    // const style = imageBackground;


    return (
      <header>
          <div className="text-box">
          <h1>{title}</h1>
        </div>
        <p className="description">{description}</p>
      </header>
    );
}
