/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from "react";
import SearchBar from "./../components/SearchBar";
import RecipesList from "./../components/RecipesList";
import { GlobalContext } from "./../context/GlobalState";
import "./homePage.css";
import axios from "axios";

const HomePage = () => {
  const url =
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=b23326a0e95047daaebbe6f992dd7ed5&cuisine=Italian";
  const [input, setInput] = useState("");

  const {
    state: { isDataLoaded },
    dispatch,
  } = useContext(GlobalContext);

  const getRecipes = async () => {
    try {
      var res = await axios.get(url);
      dispatch({
        isDataLoaded: true,
        recipesList: res.data.results,
      });
      return res.data;
    } catch (error) {
      console.log("could not get the recipes");
      return null;
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const onSearchButtonClick = () => {
    console.log("I am clicked");
    setInput("");
  };

  return (
    <div className="w-75 p-3 container align-items-center justify-content-center">
      <div>
        <SearchBar
          input={input}
          onInputChange={onInputChange}
          onSearchButtonClick={onSearchButtonClick}
        />
      </div>
      <div>{isDataLoaded ? <RecipesList /> : null}</div>
    </div>
  );
};

export default HomePage;
