import Card from "./Component/UI/Card";
import IngredientForm from "./Component/IngredientForm/IngredientForm";
import "./App.css";
import Filter from "./Component/Filter/Filter";
import LoadedIngredients from "./Component/LoadedIngredients/LoadedIngredients";

function App() {
  return (
    <div className="App">
      <h2 className="header-main">Ingredient Note App </h2>
      <Card>
        <IngredientForm />
      </Card>
      <Card>
        <Filter />
      </Card>
      <LoadedIngredients />
    </div>
  );
}

export default App;
