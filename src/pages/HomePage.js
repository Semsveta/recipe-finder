/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext } from "react";
import SearchBar from "./../components/SearchBar";
import RecipesList from "./../components/RecipesList";
import { GlobalContext } from "./../context/GlobalState";
import "./homePage.css";
import axios from "axios";

const HomePage = () => {
  const url =
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=b23326a0e95047daaebbe6f992dd7ed5&cuisine=";
  const [input, setInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    state: { isDataLoaded },
    dispatch,
  } = useContext(GlobalContext);

  const getRecipes = async () => {
    try {
      var res = await axios.get(url.concat(input));
      dispatch({
        isDataLoaded: true,
        recipesList: res.data.results,
      });
      return res.data;
    } catch (error) {
      console.log("could not get the recipes");
      setErrorMsg("Could not fined the recipes");
      dispatch({ isDataLoaded: false });
      return null;
    }
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const onSearchButtonClick = (e) => {
    console.log("I am clicked");
    getRecipes();
    setInput("");
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="centered">
        <SearchBar
          input={input}
          onInputChange={onInputChange}
          onSearchButtonClick={onSearchButtonClick}
        />
      </div>
      {errorMsg && <p> {errorMsg}</p>}

      <div>{isDataLoaded ? <RecipesList /> : null}</div>
    </div>
  );
};

export default HomePage;
