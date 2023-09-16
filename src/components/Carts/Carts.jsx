import PropTypes from "prop-types";
import Cart from "./../Cart/Cart";

const Carts = ({ carts, remainingHour, totalCreditHour, totalPrice }) => {
  return (
    <>
      <div className="px-10 py-6 mb-10 bg-white shadow-xl md:w-1/3 h-max rounded-xl">
        <h2 className="p-3 text-lg font-bold text-blue-500 border-b border-gray-600">
          Credit Hour Remaining {remainingHour}
        </h2>
        <h1 className="mt-3 text-xl font-bold">Course Name</h1>
        <ol className="py-5 list-decimal border-b border-gray-600 min-h-[200px]">
          {carts.map((cart) => {
            return (
              <Cart
                key={cart.id}
                cart={cart}
              ></Cart>
            );
          })}
        </ol>
        <p className="py-4 font-medium text-gray-700 border-b border-gray-600">
          Total Credit Hour : {totalCreditHour}
        </p>
        <p className="my-6 font-semibold">Total Price: {totalPrice} USD</p>
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
