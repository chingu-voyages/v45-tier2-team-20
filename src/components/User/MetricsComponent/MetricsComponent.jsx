import {Card} from "../../UI/Card.jsx";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import {useEffect, useState} from "react";
import {GeoChart} from "./GeoChart.jsx";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const yearOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: true,
      text: "Number of strikes by year",
    },
  },
};

const classOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: true,
      text: "Number of strikes by recClass",
    },
  },
};


export const MetricsComponent = () => {
  const [strikeByYear, setStrikeByYear] = useState([{}]);
  const [strikeByClass, setStrikeByClass] = useState([{}]);
  const [metheroite, setMetheroite] = useState([]);

  useEffect(() => {
    fetch("https://data.nasa.gov/resource/gh4g-9sfh.json")
      .then((res) => res.json())
      .then((data) => {
        setMetheroite(data); // all metheroites
      });
  }, []);

  useEffect(() => {
    // console.log('meth', metheroite.sort((a,b) => a.mass - b.mass))
    const countByYear = {};
    metheroite.map((item) => {
      countByYear[new Date(item.year).getFullYear()] =
        (countByYear[new Date(item.year).getFullYear()] || 0) + 1;
    });
    setStrikeByYear(countByYear); // prepare object to the strike by year graph
    const countByClass = {};
    metheroite.map((item) => {
      countByClass[item.recclass] = (countByClass[item.recclass] || 0) + 1;
    });
    setStrikeByClass(countByClass); // prepare object to the strike by recclass graph
  }, [metheroite])

  const yearData = {
    datasets: [
      {
        label: "Number of strikes by year",

        data: strikeByYear,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const classData = {
    datasets: [
      {
        label: "Number of strikes by recClass",

        data: strikeByClass,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="my-[120px] px-[20px]">
      <Card className="shadow-md shadow-indigo-200 w-full text-black p-2">
        <Bar options={yearOptions} data={yearData} className="mb-4" />
        <Bar options={classOptions} data={classData} />
      </Card>

      <GeoChart />
    </div>
  )
}