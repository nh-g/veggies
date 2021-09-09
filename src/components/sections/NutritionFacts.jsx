export default function NutritionFacts({ product }) {
  const calories = product.nutrition_facts[0];
  const otherData = product.nutrition_facts.slice(
    1,
    product.nutrition_facts.length
  );

  return (
    <section className="nutrition_facts">
      <h2>Nutrition Facts</h2>
      <div className="separator15" />
      <div className="calories-count">
        <h1>{calories.value}</h1>
        <h5>calories</h5>
      </div>
      <div className="separator5" />
      <p className="daily_value">% Daily Value*</p>

      <table>
        <tbody>
          {otherData.map((item) => {
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
          })}
        </tbody>
      </table>
      <div className="separator15" />
      <br />
      <span>
        *The % Daily Value tells you how much a nutrient in a serving food
        contributes to a daily die. 2000 calories a day is used for general
        nutrition advice.
      </span>
    </section>
  );
}
