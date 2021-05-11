import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

export default function DoughnutChart() {
  const data = {
    labels: ["Jan", "Feb", "March", "Apr", "May"],
    datasets: [
      {
        label: "Sales for 2019 (M)",
        data: [2, 5, 2, 1, 0],
        borderColor: ["rgba(255, 255, 255, 0.2)"],
        backgroundColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 159, 164, 1)",
          "rgba(153, 102, 255, 1)",
        ],

        fill: true,
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "Doughnut Chart",
    },
  };
  return <Doughnut data={data} options={options} />;
}
