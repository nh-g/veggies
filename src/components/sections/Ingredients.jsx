export default function Ingredients({ item }) {
  return (
    <>
    {item.map((ingredient) => {
          return (
              <div key={ingredient} className="pill ingredients">
                {ingredient}
              </div>
          );
        })}
    </>
  );
}
