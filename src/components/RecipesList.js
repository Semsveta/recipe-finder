import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Card, Button } from "react-bootstrap";
import "./recipesList.css";

const ResipesLit = () => {
  const {
    state: { recipesList },
  } = useContext(GlobalContext);

  return (
    <div>
      <dl className="library">
        {recipesList &&
          recipesList.map((recipe, index) => {
            if (recipe) {
              return (
                <div className="term" key={recipe.id}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={recipe.image} />
                    <Card.Body>
                      <Card.Title>{recipe.title}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            }
            return null;
          })}
      </dl>
    </div>
  );
};

export default ResipesLit;
