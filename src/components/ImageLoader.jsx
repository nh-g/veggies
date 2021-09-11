/**
 * Insteresting approach to the image thing
  I would give +1 for originalilty but... 
  the alt property is not always the file name 
  remember the alt is for helping people with disabilities 

  Example 1:
  An image is a logo and its called logo.png
  The screen reader will just said logo.png instead 
  The word coca cola writen in an stylized handwritting

  Example 2:
  The World Wilflife Fund (WWF) its called logo.png
  The screen reader will just said logo.png instead instead 
  A black and white panda.
 */
export default function ImageLoader({ filePath }) {
  const [fileFolder, fileName] = filePath.split("/");
  const imageURL =
    require(`../assets/images/${fileFolder}/${fileName}`).default;

  return <img alt={fileName} src={imageURL} />;
}
