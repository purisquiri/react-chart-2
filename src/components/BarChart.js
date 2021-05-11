import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

export default function BarChart() {
  const data = {
    labels: ["Jan", "Feb", "March", "Apr", "May"],
    datasets: [
      {
        label: "Sales for 2020 (M)",
        data: [3, 2, 5, 6, 2],
        borderColor: ["rgba(255, 206, 86, 0.2)"],
        backgroundColor: ["rgba(255, 206, 86, 0.2)"],
      },
      {
        label: "Sales for 2019 (M)",
        data: [2, 5, 2, 1, 0],
        borderColor: ["rgba(54, 162, 235, 0.2)"],
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],

        lineTension: 0.4,
        // borderJoinStyle: "round",
        fill: true,
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "Bar Chart",
    },
    scales: {
      y: [
        {
          ticks: {
            min: 0,
            max: 7,
            stepSize: 1,
          },
        },
      ],
    },
  };
  return <Bar data={data} options={options} />;
}
