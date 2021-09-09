export default function Ingredients({ item }) {
  return (
    <>
      {/* <ul> */}
        {item.map((ingredient) => {
          return (
            // <li key={ingredient}>
              <div key={ingredient} className="pill ingredients">
                {/* <p>{ingredient}</p> */}
                {ingredient}
              </div>
            // </li>
          );
        })}
      {/* </ul> */}
    </>
  );
}
