import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0),
    },
  },
}));

const TimeSeries = ({ data }) => {
  const classes = useStyles();
  const [active, setActive] = useState("10");
  const [selectSeries, setSelectSeries] = useState([]);
  const [selectYear, setSelectYear] = useState([]);

  const filterData = Object.keys(data).filter(
    (item) =>
      item !== "CountryName" &&
      item !== "CountryCode" &&
      item !== "IndicatorName" &&
      item !== "IndicatorUnit" &&
      item !== "Idicator" &&
      item !== "paragraph" &&
      item !== "ImageName"
  );

  const Series = filterData.map((item) => data[item]);
  const yearSplit = filterData.map((value) => value.split("_")[1]);
  const seriesLength = Series.length;

  useEffect(() => {
    let selectSeries = [];
    let selectYear = [];
    let indexStart = 0;
    switch (active) {
      case "5":
        indexStart = seriesLength - 6;
        selectSeries = Series.filter((value, index) => index > indexStart);
        selectYear = yearSplit.filter((value, index) => index > indexStart);
        setSelectSeries(selectSeries);
        setSelectYear(selectYear);
        break;
      case "10":
        indexStart = seriesLength - 11;
        selectSeries = Series.filter((value, index) => index > indexStart);
        selectYear = yearSplit.filter((value, index) => index > indexStart);
        setSelectSeries(selectSeries);
        setSelectYear(selectYear);
        break;
      case "20":
        indexStart = seriesLength - 21;
        selectSeries = Series.filter((value, index) => index > indexStart);
        selectYear = yearSplit.filter((value, index) => index > indexStart);
        setSelectSeries(selectSeries);
        setSelectYear(selectYear);
        break;
      case "30":
        indexStart = seriesLength - 31;
        selectSeries = Series.filter((value, index) => index > indexStart);
        selectYear = yearSplit.filter((value, index) => index > indexStart);
        setSelectSeries(selectSeries);
        setSelectYear(selectYear);
        break;
      case "all":
        setSelectSeries(Series);
        setSelectYear(yearSplit);
        break;
      default:
        return null;
    }
  }, [active]);

  const series = [
    {
      name: data.IndicatorName,
      data: selectSeries,
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
      colors: "#2196f3",
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
      categories: selectYear,
    },
    tooltip: {
      shared: false,
    },
  };

  return (
    <React.Fragment>
      <div className={classes.buttons}>
        <Box mr={1}>
          <Button
            variant={active === "5" ? "contained" : "outlined"}
            size="small"
            color="primary"
            className={classes.margin}
            onClick={() => setActive("5")}
          >
            5Y
          </Button>
        </Box>
        <Box mr={1}>
          <Button
            variant={active === "10" ? "contained" : "outlined"}
            size="small"
            color="primary"
            className={classes.margin}
            onClick={() => setActive("10")}
          >
            10Y
          </Button>
        </Box>
        {seriesLength > 21 && (
          <Box mr={1}>
            <Button
              variant={active === "20" ? "contained" : "outlined"}
              size="small"
              color="primary"
              className={classes.margin}
              onClick={() => setActive("20")}
            >
              20Y
            </Button>
          </Box>
        )}
        {seriesLength > 31 && (
          <Box mr={1}>
            <Button
              variant={active === "30" ? "contained" : "outlined"}
              size="small"
              color="primary"
              className={classes.margin}
              onClick={() => setActive("30")}
            >
              30Y
            </Button>
          </Box>
        )}
        <Box mr={1}>
          <Button
            variant={active === "all" ? "contained" : "outlined"}
            size="small"
            color="primary"
            className={classes.margin}
            onClick={() => setActive("all")}
          >
            All
          </Button>
        </Box>
      </div>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </React.Fragment>
  );
};

export default TimeSeries;
