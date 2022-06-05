import React, { useState } from "react";

function Sushi({ name, price, image, addPlate, payBill }) {
  const [isVisible, setIsVisible] = useState(true);

  function handleClick(){
    setIsVisible(isVisible=>!isVisible)
    addPlate("plate")
    payBill(price)
  }
  const visible = isVisible? <img src={image} alt={name} width="100%" />:null;

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {visible}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
