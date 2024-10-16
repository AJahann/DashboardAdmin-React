import type { ChartOptions } from "chart.js";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip, // اضافه شده
} from "chart.js";
import { Bar } from "react-chartjs-2";

import TitleCard from "./ui/TitleCard";

// ثبت ماژول‌های ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const BarChart = () => {
  // اضافه کردن تایپ صحیح برای options
  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // یکی از مقادیر مجاز برای position
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Store 1",
        data: labels.map(() => Math.random() * 1000 + 500),
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "Store 2",
        data: labels.map(() => Math.random() * 1000 + 500),
        backgroundColor: "rgba(53, 162, 235, 1)",
      },
    ],
  };

  return (
    <TitleCard title="Revenue">
      <Bar options={options} data={data} />
    </TitleCard>
  );
};

export default BarChart;
