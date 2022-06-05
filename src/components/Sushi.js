import React, { useState } from "react";

function Sushi({ name, price, image, addPlate, payBill, money }) {
  const [isVisible, setIsVisible] = useState(true);
  console.log(money);

  function checkBudget(){
     const enoughMoney = money >= price ? handleClick():null
  }

  function handleClick() {
    setIsVisible((isVisible) => !isVisible);
    addPlate("plate");
    payBill(price);
  }

  const visible = isVisible ? (
    <img src={image} alt={name} width="100%" />
  ) : null;

  return (
    <div className="sushi">
      <div className="plate" onClick={checkBudget}>
        {visible}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
