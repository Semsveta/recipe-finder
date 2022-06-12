import React from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

const SearchBar = ({ input, onInputChange, onSearchButtonClick }) => {
  return (
    <div className="searchInput">
      <label htmlFor="search">
        <span className="invisible">Search Recipes by cuisine </span>
      </label>
      <form onSubmit={onSearchButtonClick}>
        <InputGroup className="mb-3" size="lg">
          <Form.Control
            placeholder="Search Recipes by cuisine like Italian, Indian etc. "
            type="text"
            name="search"
            value={input}
            onChange={onInputChange}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            type="submit"
            value="Submit"
          >
            Search Recipe
          </Button>
        </InputGroup>
      </form>
    </div>
  );
};

export default SearchBar;
