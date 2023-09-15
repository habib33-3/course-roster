import "./App.css";
import Cards from "./components/Cards/Cards";
import Carts from "./components/Carts/Carts";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [carts, setCarts] = useState([]);
  const [remainingHour, setRemainingHour] = useState(20);
  const [totalCreditHour, setTotalCreditHour] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelectBtn = (card) => {
    const isExist = carts.find((cart) => cart.id === card.id);

    if (isExist) {
      return toast.error("Item Already Added");
    }
    let hourCount = card.credit_hour;

    carts.forEach((cart) => (hourCount = cart.credit_hour + hourCount));
    if (hourCount > 20) {
      return toast.error("Credit Hour Limit Exceeded");
    }

    let priceCount = card.price;
    carts.forEach((cart) => (priceCount += cart.price));

    setCarts([...carts, card]);
    setRemainingHour(20 - hourCount);
    setTotalCreditHour(hourCount);
    setTotalPrice(priceCount);
    console.log(priceCount);
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
          totalCreditHour={totalCreditHour}
          totalPrice={totalPrice}
        ></Carts>
        <Toaster
          toastOptions={{
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "white",
              background: "red",
              fontSize: "24px",
              fontWeight: "bold,",
            },
          }}
        ></Toaster>
      </div>
    </>
  );
}

export default App;
