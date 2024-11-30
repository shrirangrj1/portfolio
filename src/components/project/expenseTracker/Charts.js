import React, { useContext } from "react";
import { Chart as ChartJS, ArcElement, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { GlobalContext } from "../context/GlobalState";

// Register required elements
ChartJS.register(ArcElement, BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const Charts = () => {
  const { transactions } = useContext(GlobalContext);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const pieData = {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        data: [income, expense],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  const barData = {
    labels: transactions.map((t) => t.text),
    datasets: [
      {
        label: "Amount",
        data: transactions.map((t) => t.amount),
        backgroundColor: transactions.map((t) =>
          t.type === "income" ? "#36A2EB" : "#FF6384"
        ),
      },
    ],
  };

  return (
    <div>
      <h3>Overview</h3>
      <Pie data={pieData} />
      <Bar data={barData} />
    </div>
  );
};

export default Charts;
