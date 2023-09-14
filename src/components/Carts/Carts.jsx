import PropTypes from "prop-types";
import Cart from "./../Cart/Cart";

const Carts = ({ carts, remainingHour }) => {
  return (
    <>
      <div className="w-1/3 bg-white  h-max p-6 rounded-xl shadow-xl">
        <h2 className="text-blue-500 text-lg font-bold p-3 border-b border-gray-600">
          Credit Hour Remaining {remainingHour}
        </h2>
        <h1 className="text-xl font-bold mt-3">Course Name</h1>
        <ol className="list-decimal   border-b p-5 border-gray-600 ">
          {carts.map((cart) => {
            return (
              <Cart
                key={cart.id}
                cart={cart}
              ></Cart>
            );
          })}
        </ol>
      </div>
    </>
  );
};

Carts.propTypes = {
  carts: PropTypes.array,
  remainingHour: PropTypes.number,
};

export default Carts;
