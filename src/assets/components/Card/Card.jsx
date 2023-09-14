import PropTypes from "prop-types";
import { FaDollarSign, FaBookOpen } from "react-icons/fa6";

const Card = () => {
  return (
    <>
      <div className="card w-80 h-[402] rounded-xl shadow-md p-5 space-y-4 bg-white">
        <img
          src="https://i.ibb.co/nmtkFrR/Rectangle-2.png"
          alt=""
          className="rounded-md"
        />

        <h2 className="text-lg font-semibold ">
          Introduction to C Programming
        </h2>

        <p className="text-sm text-gray-500 ">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        <div className="flex justify-between item font-medium text-gray-600">
          <div className="flex items-center">
            <FaDollarSign></FaDollarSign>
            <p>Price</p>
          </div>

          <div className="flex items-center gap-1 ">
            <FaBookOpen></FaBookOpen>
            <p>credit</p>
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {};

export default Card;
