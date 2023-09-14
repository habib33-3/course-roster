import PropTypes from "prop-types";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const Cards = ({ handleSelectBtn }) => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("data.json");
      const data = await res.json();
      setContents(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 items-center justify-center gap-10 w-2/3">
        {contents.map((content) => {
          return (
            <Card
              key={content.id}
              content={content}
              handleSelectBtn={handleSelectBtn}
            ></Card>
          );
        })}
      </div>
    </>
  );
};

Cards.propTypes = {
  handleSelectBtn: PropTypes.func,
};

export default Cards;
