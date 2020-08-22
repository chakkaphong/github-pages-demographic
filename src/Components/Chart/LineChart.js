import React from "react";
import ReactApexChart from "react-apexcharts";
import Container from "@material-ui/core/Container";

export default ({ data }) => {
  const filterData = Object.keys(data).filter(
    (item) =>
      item !== "CountryName" &&
      item !== "CountryCode" &&
      item !== "IndicatorName" &&
      item !== "IndicatorUnit" &&
      item !== 'Idicator' &&
      item !== 'paragraph' &&
      item !== 'ImageName'
  );
  const Series = filterData.map((item) => {
    return data[item];
  });
  console.log(data);
  const series = [
    {
      name: "Desktops",
      data: Series,
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Product Trends by Month",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: filterData,
    },
  };

  return (
      <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={400}
    />
  );
};
