import React, { useState, useEffect } from "react";
import TitleCard from './TitleCard';

const headTitle = {
  Name: "",
  Population: 0,
  MedianAge: 0,
  Density: 0,
  Rank: 0,
};

const TitleData = ({ provinceData }) => {
  const [titleDetail, setTitleDetail] = useState(headTitle);
   
  useEffect(() => {
    const firstRow = provinceData[0];
    let Population = (Number(firstRow.Total) / 1000000).toFixed(1);
    let Age = Number(firstRow.medianAge).toFixed(1);
    let Density = Number(firstRow.Density).toFixed(1);
    let Rank = Number(firstRow.Rank);
    console.log(provinceData)
    setTitleDetail({
      Name: firstRow.Province,
      Population,
      MedianAge: Age,
      Density,
      Rank,
    });
  }, [provinceData], [titleDetail]);
  return <TitleCard titleDetail={titleDetail} />;
};

export default TitleData;
