import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IngredientsList = () => {
  const {
    state: { recipeDetails },
  } = useContext(GlobalContext);

  return (
    <ul className="list">
      {recipeDetails.extendedIngredients &&
        recipeDetails.extendedIngredients.map((ingredient, index) => {
          return (
            <li key={ingredient.id}>
              {ingredient.name} {ingredient.amount} {ingredient.unit}
            </li>
          );
        })}
    </ul>
  );
};

export default IngredientsList;
