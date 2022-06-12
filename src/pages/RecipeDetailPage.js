/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "./../context/GlobalState";
import "./recipeDetailesPage.css";
import IngredientsList from "../components/IngredientsList";
import HealthInfo from "../components/HealthInfo";
import Instructions from "../components/Instructions";

const RecipeDetailPage = () => {
  //get Id from url
  const params = useParams();
  const recipeId = params.recipeId.substring(1);
  console.log("recipId: " + recipeId);
  const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=b23326a0e95047daaebbe6f992dd7ed5&includeNutrition=false`;

  const {
    state: { isDetailsLoaded, recipeDetails },
    dispatch,
  } = useContext(GlobalContext);

  const getrecipeDetails = async () => {
    try {
      var res = await axios.get(url);
      dispatch({
        isDetailsLoaded: true,
        recipeDetails: res.data,
      });

      return res.data;
    } catch (error) {
      console.log("could not get the recipe details");
      return null;
    }
  };

  useEffect(() => {
    getrecipeDetails();
  }, []);

  return (
    <div>
      <br /> <br />
      {isDetailsLoaded && (
        <div className="card mb-3 recipeDetailes">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={recipeDetails.image} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="title">{recipeDetails.title}</h3>
                <br />
                <div className="row">
                  <div className="col-md-6">
                    <h5 className="title"> Health Information </h5>
                    <HealthInfo />
                  </div>
                  <div className="col-md-6">
                    <h5 className="title"> Ingredients </h5>
                    <IngredientsList />
                  </div>
                </div>
                <div className="row"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <Instructions steps={recipeDetails.analyzedInstructions[0].steps} />
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetailPage;
