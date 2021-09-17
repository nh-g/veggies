export default function Header({ item }) {
  const { title, imagePath, description } = item;

  return (
    <header>
      <div className="text-box">
        <h1>{title}</h1>
      </div>
      <p className="description">{description}</p>
    </header>
  );
}
