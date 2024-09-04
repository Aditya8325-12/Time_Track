import React from "react";
import Chart from "react-apexcharts";
const Example = () => {
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    title: {
      text: "Monthly Sales",
      align: "center",
    },
  };

  const series = [
    {
      name: "Sales",
      data: [30, 40, 45, 50, 49, 60],
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="bar" />
    </div>
  );
};

export default Example;
