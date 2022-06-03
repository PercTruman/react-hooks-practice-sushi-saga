import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushiList, mealCount, setMealCount}) {
 const meal = 4 * mealCount

  const sushiSet = sushiList.map((sushi) => (
    sushi.id <= meal ?
    <Sushi
      key={sushi.id}
      name={sushi.name}
      price={sushi.price}
      image={sushi.img_url}
    />
    : ''
  ))

  
 
 

  return (
    <div className="belt">
      {sushiSet}
      <MoreButton mealCount={mealCount} setMealCount={setMealCount} />
    </div>
  );
}

export default SushiContainer;
