import "./App.css";
import Cards from "./components/Cards/Cards";
import Carts from "./components/Carts/Carts";
import { useState } from "react";

function App() {
  const [carts, setCarts] = useState([]);
  const [remainingHour, setRemainingHour] = useState(0);

  const handleSelectBtn = (card) => {
    const isExist = carts.find((cart) => cart.id === card.id);

    if (isExist) {
      return alert("Already Added");
    }
    let count = card.credit_hour;

    carts.forEach((cart) => (count = cart.credit_hour + count));
    if (count > 20) {
      return alert("Credit Hour Limit Exceed");
    }
    setCarts([...carts, card]);
    setRemainingHour(20 - count);
  };

  return (
    <>
      <h1 className="text-4xl text-black font-bold text-center mb-12">
        Course Registration
      </h1>

      <div className="w-[95%] mx-auto flex gap-12  justify-between ">
        <Cards handleSelectBtn={handleSelectBtn}></Cards>
        <Carts
          carts={carts}
          remainingHour={remainingHour}
        ></Carts>
      </div>
    </>
  );
}

export default App;
