import React, { createContext, useReducer } from "react";

const initialState = {
  recipesList: [],
  recipeDetails: {},
  isDataLoaded: false,
  isDetailsLoaded: false,
};

const reducer = (state, action) => {
  return { ...state, ...action };
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
