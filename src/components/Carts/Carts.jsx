import PropTypes from "prop-types";
import Cart from "./../Cart/Cart";

const Carts = ({ carts }) => {
  return (
    <>
      <div className="w-1/3 bg-white  h-max p-6 rounded-xl shadow-xl">
        <h1 className="text-xl font-bold ">Course Name</h1>
        <div className="list-decimal   border-b p-5 border-gray-600 ">
          {carts.map((cart) => {
            return (
              <Cart
                key={cart.id}
                cart={cart}
              ></Cart>
            );
          })}
        </div>
      </div>
    </>
  );
};

Carts.propTypes = {
  carts: PropTypes.array,
};

export default Carts;
