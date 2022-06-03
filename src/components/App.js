import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

function App() {
  const [sushiList, setSushiList] = useState([]);

 const [mealCount, setMealCount] = useState(1)

  useEffect(() => {
    fetch("http://localhost:3001/sushis?")
      .then((res) => res.json())
      .then((sushiList) => setSushiList(sushiList));
  }, []);

 
  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} mealCount={mealCount} setMealCount={setMealCount} />
      <Table />
    </div>
  );
}

export default App;
