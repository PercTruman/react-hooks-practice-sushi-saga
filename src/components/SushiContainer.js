import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushiList, mealCount, setMealCount, addPlate }) {
  const meal = 4 * mealCount;

  const sushiSet = sushiList.filter(
    (sushi) => sushi.id <= meal && sushi.id > meal - 4
  )

  const mealMinusEatenMeals =sushiSet.map(dish=>
      <Sushi
        key={dish.id}
        id={dish.id}
        name={dish.name}
        price={dish.price}
        image={dish.img_url}
        addPlate={addPlate}
      />
  );
  return (
    <div className="belt">
      {mealMinusEatenMeals}
      <MoreButton mealCount={mealCount} setMealCount={setMealCount} />
    </div>
  );
}

export default SushiContainer;
