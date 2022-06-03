import React from "react";

function MoreButton({ setMealCount }) {

  function handleClick() {
   setMealCount(mealCount=>mealCount + 1)
  }

  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
