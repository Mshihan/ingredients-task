import Ingredient from "../Ingredient/Ingredient";
import Card from "../UI/Card";
import "./LoadedIngredients.css";

const LoadedIngredients = () => {
  return (
    <div className="ingredients-main">
      <h2 className="ingredients-main__title">Loaded Ingredients</h2>
      <div className="ingredients-main__bar"></div>
      <Card>
        <Ingredient />
      </Card>
    </div>
  );
};

export default LoadedIngredients;
