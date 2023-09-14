import PropTypes from "prop-types";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const Cards = () => {
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
      <div className="grid grid-cols-3 items-center justify-center gap-10">
        {contents.map((content) => {
          return (
            <Card
              key={content.id}
              content={content}
            ></Card>
          );
        })}
      </div>
    </>
  );
};

Cards.propTypes = {};

export default Cards;
