import PropTypes from "prop-types";
import Cart from "./../Cart/Cart";

const Carts = ({ carts, remainingHour, totalCreditHour, totalPrice }) => {
  return (
    <>
      <div className="w-1/3 bg-white  h-max px-10 py-6 rounded-xl shadow-xl">
        <h2 className="text-blue-500 text-lg font-bold p-3 border-b border-gray-600">
          Credit Hour Remaining {remainingHour}
        </h2>
        <h1 className="text-xl font-bold mt-3">Course Name</h1>
        <ol className="list-decimal border-b  py-5 border-gray-600 ">
          {carts.map((cart) => {
            return (
              <Cart
                key={cart.id}
                cart={cart}
              ></Cart>
            );
          })}
        </ol>
        <p className="py-4 text-gray-700 font-medium border-b border-gray-600">
          Total Credit Hour : {totalCreditHour}
        </p>
        <p className="font-semibold my-6">Total Price: {totalPrice} USD</p>
      </div>
    </>
  );
};

Carts.propTypes = {
  carts: PropTypes.array,
  remainingHour: PropTypes.number,
  totalCreditHour: PropTypes.number,
  totalPrice: PropTypes.number,
};

export default Carts;
