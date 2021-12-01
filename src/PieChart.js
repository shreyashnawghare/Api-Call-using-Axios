//Pie chart

import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";

const state = {
  labels: ["Direct", "Referral", "Social"],
  datasets: [
    {
      label: "Revenue",
      backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
      hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf"],
      data: [55, 30, 15],
    },
  ],
};

export default class PieChart extends React.Component {
  render() {
    return (
      <div>
        <Doughnut
          data={state}
          options={{
            title: {
              display: false,
              text: "Average Rainfall per month",
              fontSize: 20,
            },
            legend: {
              display: false,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}
