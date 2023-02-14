import React from "react";
import Buttons from "../style/Buttons";

const ButtonArea = () => {
  const buttonsClickHandler = () => {
    console.log("dd");
  };
  return (
    <div>
      <p>_ </p>
      <p>_ </p>
      <Buttons color="red" onClick={buttonsClickHandler}>
        1
      </Buttons>
      <Buttons color="orange">2</Buttons>
      <Buttons color="yellow">3</Buttons>
      <Buttons color="green">4</Buttons>
      <Buttons color="blue">5</Buttons>
      <Buttons color="purple">6 😁</Buttons>
    </div>
  );
};

export default ButtonArea;
