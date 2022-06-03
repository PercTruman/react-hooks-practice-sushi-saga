import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushi}) {
  const sushiSet =  sushi.map(item=>
    <Sushi key={item.id} name={item.name} price={item.price} image={item.img_url}/>)
  
  return (
    <div className="belt">
      {sushiSet}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
