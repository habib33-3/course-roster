import PropTypes from "prop-types";
import { FaDollarSign, FaBookOpen } from "react-icons/fa6";

const Card = ({ content, handleSelectBtn }) => {
  const { thumbnail, course_name, description, price, credit_hour } = content;

  return (
    <>
      <div className="card mb-2 w-[280px] h-[450px] rounded-xl shadow-md p-5 space-y-4 bg-white flex flex-col justify-between ">
        <img
          src={thumbnail}
          alt=""
          className="rounded-md w-[250px] h-[144px]"
        />

        <h2 className="text-lg font-semibold ">{course_name}</h2>

        <p className="text-sm text-justify text-gray-500 ">{description}</p>

        <div className="flex justify-between font-medium text-gray-600 item">
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
          className="text-white btn btn-primary"
        >
          Select
        </button>
      </div>
    </>
  );
};

Card.propTypes = {
  content: PropTypes.object,
  handleSelectBtn: PropTypes.func,
};

export default Card;
