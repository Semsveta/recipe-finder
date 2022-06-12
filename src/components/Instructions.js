import React from "react";

const Instractions = ({ steps }) => {
  return (
    <>
      <h5 className="titleInstructions"> Cooking Instructions</h5>
      <ol className="list steps">
        {steps &&
          steps.map((step, index) => {
            return <li key={step.number}>{step.step}</li>;
          })}
      </ol>
    </>
  );
};

export default Instractions;
