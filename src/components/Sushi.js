import React, { useState } from "react";

function Sushi({ name, price, image}) {
  const [isVisible, setIsVisible] = useState(true);

  function toggleIsVisible(){
    setIsVisible(isVisible=>!isVisible)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={toggleIsVisible}>
        {false? null:<img src={image} alt={name} width="100%" /> }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
