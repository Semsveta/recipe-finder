import React from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import "./searchBar.css";

const SearchBar = ({ input, onInputChange, onSearchButtonClick }) => {
  return (
    <div className="searchInput">
      <label htmlFor="search">
        <span className="invisible">Search Recipes by cuisine</span>
      </label>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search Recipes by cuisine."
          type="text"
          name="search"
          value={input}
          onChange={onInputChange}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={onSearchButtonClick}
        >
          Button
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
