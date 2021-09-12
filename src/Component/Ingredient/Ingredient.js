import "./Ingredient.css";
const Ingredient = (props) => {
  return (
    <div className="ingredient-main">
      <p className="ingredient-main__name">{props.name}</p>
      <p className="ingredient-main__amount">{props.amount}x</p>
    </div>
  );
};

export default Ingredient;
