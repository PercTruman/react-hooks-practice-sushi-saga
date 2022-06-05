import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

function App() {
  const [sushiList, setSushiList] = useState([]);
  const [mealCount, setMealCount] = useState(1);
  const [plates, setPlates]=useState([])
  

  useEffect(() => {
    fetch("http://localhost:3001/sushis?")
      .then((res) => res.json())
      .then((sushiList) => setSushiList(sushiList));
  }, []);

  function addPlate(newPlate){
    setPlates(plates=>[...plates, newPlate])
  }



  return (
    <div className="app">
      <SushiContainer
        sushiList={sushiList}
        setSushiList={setSushiList}
        mealCount={mealCount}
        setMealCount={setMealCount}
        addPlate={addPlate}
      />
      <Table plates={plates}/>
    </div>
  );  
}

export default App;
