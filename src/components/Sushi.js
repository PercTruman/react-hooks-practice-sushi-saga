import React, { useState } from "react";

function Sushi({ name, price, image}) {
  const [isVisible, setIsVisible] = useState(true);

  function toggleIsVisible(){
    setIsVisible(isVisible=>!isVisible)
  }
  const visible = isVisible? <img src={image} alt={name} width="100%" />:null;

  return (
    <div className="sushi">
      <div className="plate" onClick={toggleIsVisible}>
        {visible}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
