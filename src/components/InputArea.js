import React, { useState } from "react";

const InputArea = () => {
  const [normalInput, setNormalInput] = useState("");
  const [moneyInput, setMoneyInput] = useState("");
  const normalInputChangeHandler = (e) => {
    let newInput = e.target.value;
    setNormalInput(newInput);
  };
  const moneyInputChangeHandler = (e) => {
    let newInput = e.target.value.replace(/[^0-9]/g, "");
    setMoneyInput(newInput.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  };
  return (
    <div>
      <input
        type="text"
        name="normal"
        value={normalInput}
        onChange={normalInputChangeHandler}
      />
      <input
        type="text"
        name="money"
        value={moneyInput}
        onChange={moneyInputChangeHandler}
      />
    </div>
  );
};

export default InputArea;
