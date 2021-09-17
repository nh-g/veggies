export default function Ingredients({ item }) {
  const Ingredients = item.map((ingredient) => {
    return (
      <div key={ingredient} className="pill ingredients">
        {ingredient}
      </div>
    );
  });
  return <>{Ingredients}</>;
}
