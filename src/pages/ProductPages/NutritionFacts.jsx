export default function NutritionFacts({ product }) {
  const calories = product.nutritionFacts[0];
  const otherData = product.nutritionFacts.slice(
    1,
    product.nutritionFacts.length
  );
  const NutritionPercentages = otherData.map((item) => {
    return (
      <tr key={item.id}>
        <td>
          <h4>{item.label}</h4>
        </td>
        <td>
          <p>{item.value}%</p>
        </td>
      </tr>
    );
  });

  return (
    <section className="nutritionFacts">
      <header>
        <h2>Nutrition Facts</h2>
        <h5>Serving Size 1/2 cup (about 82g) </h5>
        <h5>Serving Per Portion 3</h5>
        <div className="separator15" />
        <div className="calories-count">
          <h1>{calories.value}</h1>
          <h5>calories</h5>
          <h4 className="daily_value">% Daily Value*</h4>
        </div>
      </header>

      <div className="separator8" />

      <table>
        <tbody>{NutritionPercentages}</tbody>
      </table>

      <div className="separator15" />

      <h5>
        *The % Daily Value tells you how much a nutrient in a serving food
        contributes to a daily die. 2000 calories a day is used for general
        nutrition advice.
      </h5>
    </section>
  );
}
