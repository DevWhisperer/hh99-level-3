import React from "react";
import Button1 from "../style/Button1";
import Button2 from "../style/Button2";

const ModalArea = ({ setModalNum }) => {
  const modalOneOn = () => {
    setModalNum(1);
  };
  const modalTwoOn = () => {
    setModalNum(2);
  };

  return (
    <div>
      <Button1 onClick={modalOneOn}>모달1</Button1>
      <Button2 onClick={modalTwoOn}>모달2</Button2>
    </div>
  );
};

export default ModalArea;
