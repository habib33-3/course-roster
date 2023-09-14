import PropTypes from "prop-types";
import { FaDollarSign, FaBookOpen } from "react-icons/fa6";

const Card = ({ content, handleSelectBtn }) => {
  const { thumbnail, course_name, description, price, credit_hour } = content;

  return (
    <>
      <div className="card w-[280px] h-[450px] rounded-xl shadow-md p-5 space-y-4 bg-white flex flex-col justify-between ">
        <img
          src={thumbnail}
          alt=""
          className="rounded-md w-[250px] h-[144px]"
        />

        <h2 className="text-lg font-semibold ">{course_name}</h2>

        <p className="text-sm text-gray-500 text-justify ">{description}</p>

        <div className="flex justify-between item font-medium text-gray-600">
          <div className="flex items-center">
            <FaDollarSign></FaDollarSign>
            <p>Price: {price}</p>
          </div>

          <div className="flex items-center gap-1 ">
            <FaBookOpen></FaBookOpen>
            <p>Credit: {credit_hour} hr</p>
          </div>
        </div>

        <button
          onClick={() => handleSelectBtn(content)}
          className="btn btn-primary text-white"
        >
          Select
        </button>
      </div>
    </>
  );
};

Card.propTypes = {
  content: PropTypes.object,
};

export default Card;
