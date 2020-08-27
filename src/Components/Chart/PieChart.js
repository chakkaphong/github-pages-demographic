import React from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: center;
`;

const PieChart = ({ productive }) => {
  const series = [
    productive.preReProductive,
    productive.reProductive,
    productive.postProductive,
  ];
  const options = {
    chart: {
      width: 500,
      type: "pie",
    },
     colors: ['#2196f3', '#90caf9', '#0d47a1'],
    labels: [
      "Pre-Reproductive(0-14)",
      "Reproductive(15-44)",
      "Post-Reproductive(45-100+)",
    ],
    responsive: [
      {
        breakpoint: 380,
        options: {
          chart: {
            width: 390,
          },
          legend: {
            position: "bottom",
            fontWeight: 600,
            
          },
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <Section>
        {productive.Name !== "" && (
          <ReactApexChart
            options={options}
            series={series}
            type="pie"
            width={500}
          />
        )}
      </Section>
    </React.Fragment>
  );
};

export default PieChart;
