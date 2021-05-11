import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

export default function LineChart() {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let currency = [];
    let rate = [];
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((res) => {
        console.log(res.data.bpi);
        const dataBit = res.data.bpi;
        for (const item in dataBit) {
          currency.push(item);
          rate.push(parseFloat(dataBit[item].rate_float));
        }

        setChartData({
          labels: currency,
          datasets: [
            {
              label: "rate of currency",
              data: rate,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4,
              lineTension: 0.4,

              fill: true,
            },
          ],
        });
      })
      .catch((err) => {
        console.error(err);
      });

    console.log(currency, rate);
  };

  useEffect(() => {
    chart();
  }, []);

  //   const data = {
  //     labels: ["Jan", "Feb", "March", "Apr", "May"],
  //     datasets: [
  //       {
  //         label: "Sales for 2020 (M)",
  //         data: [3, 2, 5, 6, 2],
  //         borderColor: ["rgba(255, 206, 86, 0.2)"],
  //         backgroundColor: ["rgba(255, 206, 86, 0.2)"],
  //         pointBackgroundColor: "rgba(255, 206, 86, 0.2)",
  //         pointBorderColor: "rgba(255, 206, 86, 0.2)",
  //       },
  //       {
  //         label: "Sales for 2019 (M)",
  //         data: [2, 5, 2, 1, 0],
  //         borderColor: ["rgba(54, 162, 235, 0.2)"],
  //         backgroundColor: ["rgba(54, 162, 235, 0.2)"],
  //         pointBackgroundColor: "rgba(54, 162, 235, 0.2)",
  //         pointBorderColor: "rgba(54, 162, 235, 0.2)",
  //         lineTension: 0.4,
  //         // borderJoinStyle: "round",
  //         fill: true,
  //       },
  //     ],
  //   };
  const options = {
    responsive: true,
    title: { text: "THICCNESS SCALE", display: true },
    scales: {
      yAxes: [
        {
          ticks: {
            autoSkip: true,
            maxTicksLimit: 10,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };
  return <Line data={chartData} options={options} />;
}
