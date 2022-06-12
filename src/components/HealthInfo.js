import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const HealthInfo = () => {
  const {
    state: { recipeDetails },
  } = useContext(GlobalContext);

  return (
    <ul className="list">
      <li>{recipeDetails.vegan ? <p>Vegan: Yes </p> : <p>Vegan: No</p>}</li>

      <li>
        {recipeDetails.vegetarian ? (
          <p>Vegetarian : Yes </p>
        ) : (
          <p>Vegetarian : No </p>
        )}
      </li>
      <li>
        {recipeDetails.dairyFree ? (
          <p>Dairy Free : Yes </p>
        ) : (
          <p>Dairy Free : No </p>
        )}
      </li>
      <li>
        {recipeDetails.glutenFree ? (
          <p>Gluten Free : Yes </p>
        ) : (
          <p>Gluten Free : No </p>
        )}
      </li>
    </ul>
  );
};

export default HealthInfo;
