import Ingredient from "../Ingredient/Ingredient";
import Card from "../UI/Card";
import "./LoadedIngredients.css";
import { useSelector } from "react-redux";

const LoadedIngredients = () => {
  const list = useSelector((state) => state.list);

  const ingredients = list.map((key) => {
    return (
      <Card>
        <Ingredient name={key.name} amount={key.amount} />
      </Card>
    );
  });

  return (
    <div className="ingredients-main">
      <h2 className="ingredients-main__title">Loaded Ingredients</h2>
      <div className="ingredients-main__bar"></div>
    </div>
  );
};

export default LoadedIngredients;
