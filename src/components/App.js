import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

function App() {
  const [sushiList, setSushiList] = useState([]);
  const [mealCount, setMealCount] = useState(1);
  const [plates, setPlates]=useState([])
  const [money, setMoney]=useState(50)
  

  useEffect(() => {
    fetch("http://localhost:3001/sushis?")
      .then((res) => res.json())
      .then((sushiList) => setSushiList(sushiList));
  }, []);

  function addPlate(newPlate){
    setPlates(plates=>[...plates, newPlate])
  }

  function payBill(bill){
    setMoney(money=>money - bill)
  }



  return (
    <div className="app">
      <SushiContainer
        sushiList={sushiList}
        setSushiList={setSushiList}
        mealCount={mealCount}
        setMealCount={setMealCount}
        addPlate={addPlate}
        payBill={payBill}
      />
      <Table plates={plates} money={money} />
    </div>
  );  
}

export default App;
