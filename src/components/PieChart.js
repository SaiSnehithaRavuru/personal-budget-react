import React, { useEffect, useState } from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { getBudgetData } from "../api/budgetService";

Chart.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{ data: [], backgroundColor: ["#ffcd56", "#ff6384", "#36a2eb", "#fd6b19", "#54cd56"] }],
  });

  useEffect(() => {
    getBudgetData().then((data) => {
      setChartData({
        labels: data.map((item) => item.title),
        datasets: [{ data: data.map((item) => item.budget), backgroundColor: ["#ffcd56", "#ff6384", "#36a2eb", "#fd6b19", "#54cd56"] }],
      });
    });
  }, []);

  return <Pie data={chartData} />;
};

export default PieChart;