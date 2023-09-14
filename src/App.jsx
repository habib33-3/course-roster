import "./App.css";
import Cards from "./components/Cards/Cards";
import Carts from "./components/Carts/Carts";
import { useState } from "react";

function App() {
  const [carts, setCarts] = useState([]);

  const handleSelectBtn = (card) => {
    setCarts([...carts, card]);
    
  };
console.log(carts);
  return (
    <>
      <h1 className="text-4xl text-black font-bold text-center mb-12">
        Course Registration
      </h1>

      <div className="w-[95%] mx-auto flex gap-12  justify-between ">
        <Cards handleSelectBtn={handleSelectBtn}></Cards>
        <Carts carts={carts}></Carts>
      </div>
    </>
  );
}

export default App;
