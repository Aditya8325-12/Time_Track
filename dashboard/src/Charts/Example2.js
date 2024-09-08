import React from "react";
import Chart from "react-apexcharts";
const Example2 = () => {
  const options = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              return 249;
            },
          },
        },
      },
    },
    labels: ["Apples", "Oranges", "Bananas", "Berries"],
  };

  const series = [44, 55, 67, 83];

  return (
    <div id="chart" className=" w-11/12">
      <Chart options={options} series={series} type="radialBar" height={400} />
    </div>
  );
};

export default Example2;
