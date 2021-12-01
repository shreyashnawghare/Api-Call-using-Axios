//Line chart

import React from "react";
import { Line } from "react-chartjs-2";

const state1 = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Earning",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [
        55000, 65000, 60000, 75000, 65000, 85000, 70000, 95000, 75000, 105000,
        80000, 115000,
      ],
    },
  ],
};

class LineChart extends React.Component {
  render() {
    return (
      <>
        <Line
          data={state1}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20,
            },
            legend: {
              display: false,
              position: "right",
            },
          }}
        />
      </>
    );
  }
}

export default LineChart;
