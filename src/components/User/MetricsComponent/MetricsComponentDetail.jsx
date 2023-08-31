import {Card} from "../../UI/Card.jsx";
import {useEffect, useState} from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: false,
      text: 'Number of strikes',
    },
  },
  ticks: {
    precision: 0
  }
};

const tabs = [
  {
    code: 'number',
    name: 'Number of strikes'
  },
  {
    code: 'mass',
    name: 'Average mass'
  },
  {
    code: 'year',
    name: 'Strikes by year'
  },
  {
    code: 'recclass',
    name: 'Strikes by composition'
  },
]

export const MetricsComponentDetail = ({data, allData}) => {
  const [tabContent, setTabContent] = useState('number')

  const changeTab = (code) => {
    setTabContent(code)
  }

  const [massBar, setMassBar] = useState({ labels: [], datasets: [] })
  const [yearBar, setYearBar] = useState({ labels: [], datasets: [] })
  const [recclassBar, setReclassBar] = useState({ labels: [], datasets: [] })

  useEffect(() => {
    if (allData.length > 0) {
      const massNumber = allData.filter(item => item.mass === data.mass).length
      const yearNumber = allData.filter(item => item.year === data.year).length
      const recclassNumber = allData.filter(item => item.recclass === data.recclass).length

      const massForBar = {
        labels: [`${data.mass}kg`],
        datasets: [
          {
            label: 'Average mass',
            barThickness: 60,
            data: [massNumber],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
      setMassBar(massForBar)

      const yearForBar = {
        labels: [new Date(data.year).getFullYear()],
        datasets: [
          {
            label: 'Number by year',
            barThickness: 60,
            data: [yearNumber],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
      setYearBar(yearForBar)

      const recclassForBar = {
        labels: [data.recclass],
        datasets: [
          {
            label: 'Number by recclass',
            barThickness: 60,
            data: [recclassNumber],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
      setReclassBar(recclassForBar)
    }
  }, [allData])

  const labels = [data.name];

  const dataBar = {
    labels,
    datasets: [
      {
        label: 'Number of strikes',
        barThickness: 60,
        data: [1, 2],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
      <Card className="shadow-lg shadow-indigo-300 w-[50%] mx-auto px-[20px] py-[30px]">
        <div className="flex justify-center gap-[12px]">
          {tabs.map(tab => (
            <button
              onClick={() => changeTab(tab.code)}
              key={tab.code}
              className="text-indigo-600 rounded-md px-[16px] py-[4px] border border-indigo-600 font-medium focus:ring-indigo-500 focus:text-slate-800 focus:border-transparent focus:ring-2 focus:outline-none hover:bg-gray-100">
              {tab.name}
            </button>
          ))}
        </div>
        <div>
          {tabContent === 'number' && (
            <Bar options={options} data={dataBar} />
          )}
          {tabContent === 'mass' && (
            <Bar redraw options={options} data={massBar} />
          )}
          {tabContent === 'year' && (
            <Bar redraw options={options} data={yearBar} />
          )}
          {tabContent === 'recclass' && (
            <Bar redraw options={options} data={recclassBar} />
          )}
        </div>
      </Card>
  )
}