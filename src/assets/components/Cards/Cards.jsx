import PropTypes from "prop-types";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const Cards = (props) => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("data.json");
      const data = await res.json();
      setContents(data);
    };

    fetchData();
  }, []);

  return <Card contents={contents}></Card>;
};

Cards.propTypes = {};

export default Cards;
