// import { Chart, LineController, LineElement, PointElement, CategoryScale, LinearScale } from "chart.js";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend
);

export default function HourlyChart({temperatureData, labelsData}) {
    console.log(temperatureData);
    const data = {
        labels: labelsData,
        datasets: [
        {
            label: "Temperature",
            data: temperatureData,
            borderColor: "#ffb36c",
            backgroundColor: "#fff",
            tension: 0,
        },
        ],
    };
  const options = {
    responsive: true,
    plugins: {
      legend: false,
      title: {
        display: false,
      },
    },
  };
    return (
        <Line data={data} options={options}/>
    );
}