import React from "react";
import ReactApexChart from "react-apexcharts";

const TimeSeries = ({ data }) => {
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

  const yearSplit = filterData.map(value =>value.split("_")[1])

  const series = [
    {
      name: data.IndicatorName,
      data: Series,
    },
  ];
  const options = {
    chart: {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      colors: "#E91E63",
      toolbar: {
        autoSelected: "zoom",
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    title: {
      text: "",
      align: "left",
    },
    fill: {
      colors:"#2196f3",
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0.3,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      title: {
        text: "Price",
      },
    },
    xaxis: {
      categories: yearSplit,
    },
     tooltip: {
                shared: false,
        
                  }
  };
  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height={350}
    />
  );
};

export default TimeSeries;
