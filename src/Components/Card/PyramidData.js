import React, { useState, useEffect } from "react";
import CardPyramid from './CardPyramid'

function filterData(param) {
  let filter = Object.keys(param)
    .filter(
      (item) =>
        item !== "ID" &&
        item !== "region" &&
        item !== "Province" &&
        item !== "Density" &&
        item !== "Sex" &&
        item !== "medianAge" &&
        item !== "Rank" &&
        item !== "Total" &&
        item !== "Undefine"
    )
    .map((item) => {
      return param[item];
    });
  return filter;
}

const PyramidData = ({ provinceData }) => {

  const [total, setTotal] = useState([]);
  const [male, setMale] = useState([]);
  const [female, setFeMale] = useState([]);

  useEffect(() => {
    const [Total, Male, Female] = provinceData;
    
    const spitTotal = filterData(Total);
    const spitMale = filterData(Male);
    const spitFemale = filterData(Female);

    setTotal(spitTotal);
    setMale(spitMale);
    setFeMale(spitFemale);
  }, [provinceData]);

  return <CardPyramid total={total} male={male} female={female} />;
};

export default PyramidData;
