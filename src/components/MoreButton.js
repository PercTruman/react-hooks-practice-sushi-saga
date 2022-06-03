import React from "react";

function MoreButton({mealCount, setMealCount }) {

  function handleClick() {
   setMealCount(mealCount=>mealCount + 1)
  }
  console.log(mealCount)
  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
