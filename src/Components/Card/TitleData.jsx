import React, { useState, useEffect } from "react";
import TitleCard from "./TitleCard";

const headTitle = {
  Name: "",
  Population: 0,
  MedianAge: 0,
  Density: 0,
  Rank: 0,
};

const getFirstPageExtract = (jsonResponse) => {
  // You should probably add some validathin here to make sure pages exists
  const pages = jsonResponse.query.pages;
  const pageIds = Object.keys(pages);
  // Here we only take the first response since we know there is only one.
  const firstPageId = pageIds.length ? pageIds[0] : null;
  return firstPageId ? pages[firstPageId].extract : null;
};

const TitleData = ({ provinceData }) => {
  const [titleDetail, setTitleDetail] = useState(headTitle);
  const [cityContent, setCityContent] = useState(null);

  const getCity = async (name) => {
    const url = `https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=${name}`;
    const response = await fetch(url);
    const jsonContent = await response.json();
    const extract = getFirstPageExtract(jsonContent);
    setCityContent(extract);
  };
  useEffect(
    () => {
      const firstRow = provinceData[0];
      let Population = (Number(firstRow.Total) / 1000000).toFixed(3);
      let Age = Number(firstRow.medianAge).toFixed(1);
      let Density = Number(firstRow.Density).toFixed(1);
      let Rank = Number(firstRow.Rank);
      let Province = firstRow.Province;
      let Search =
        firstRow.Province === "Thailand" || firstRow.Province === "Bangkok"
          ? firstRow.Province
          : `${firstRow.Province}_Province`;
      document.title = `${Search} - Demographic`;
      getCity(Search);
      setTitleDetail({
        Name: Province,
        Population,
        MedianAge: Age,
        Density,
        Rank,
      });
    },
    [provinceData],
    [titleDetail]
  );
  return <TitleCard titleDetail={titleDetail} cityContent={cityContent} />;
};

export default TitleData;
