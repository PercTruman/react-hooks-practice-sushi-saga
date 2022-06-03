import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";



function App() {
  const [sushi, setSushi]=useState([])


  useEffect(()=>{
    fetch("http://localhost:3001/sushis?_limit=4")
      .then(res=>res.json())
      .then(sushi=>setSushi(sushi));
},[])
  return (
    <div className="app">
      <SushiContainer sushi={sushi}/>
      <Table />
    </div>
  );
}

export default App;
