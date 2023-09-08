import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaWeightHanging } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { BsCalendar3 } from "react-icons/bs";
import { PiMapPinFill } from "react-icons/pi";
import { MdEditDocument } from "react-icons/md";
import { FaWind } from "react-icons/fa";
import { FaArrowsAltV } from "react-icons/fa";
import { FaArrowsAltH } from "react-icons/fa";

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

const MetheroiteDetailPage = () => {
  const [detailMetheroite, setDetailMetheroite] = useState([]);
  const [metheroite, setMetheroite] = useState([]);
  const [averageMetheroiteWeight, setAverageMetheroiteWeight] = useState([]);
  const [geoDataCountry, setGeoDataCountry] = useState("");
  const [strikeByYear, setStrikeByYear] = useState([{}]);
  const [strikeByClass, setStrikeByClass] = useState([{}]);
  const params = useParams();
  useEffect(() => {
    fetch("https://data.nasa.gov/resource/gh4g-9sfh.json")
      .then((res) => res.json())
      .then((data) => {
        setMetheroite(data); // all metheroites

        setAverageMetheroiteWeight(
          data.reduce((total, currentValue) => {
            return currentValue.mass
              ? total + Number(currentValue.mass)
              : total + 0;
          }, 0)
        );
        setDetailMetheroite(
          data.filter((item) => item.id === params.metheroiteId)[0]
        );
        setDetailMetheroite((prev) => ({
          ...prev,
          year: new Date(prev.year).getFullYear(),
        }));
      });
  }, [detailMetheroite.reclat, params.metheroiteId]);

  useEffect(() => {
    if (detailMetheroite.reclat)
      fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${detailMetheroite.reclat}&lon=${detailMetheroite.reclong}&format=json&apiKey=1c6480fe81734704bb23de7a30a2a769` // geolocaction for the country where metheorite strike
      )
        .then((res) => res.json())
        .then((data) => {
          setGeoDataCountry(data.results[0].country);
        });
  }, [detailMetheroite.reclat, detailMetheroite.reclong]);
  useEffect(() => {
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
  }, [metheroite]);
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
    <div className="mb-auto bg-white min-h-screen">
      {/* <SearchBar /> */}
      <p className="text-black">
        TOTAL METHEROTIE MASS__
        {averageMetheroiteWeight.toLocaleString("en-US")} kg
      </p>
      <p className="text-black">
        AVERAGE METHEROTIE MASS__
        {(averageMetheroiteWeight / metheroite.length).toLocaleString(
          "en-US"
        )}{" "}
        kg
      </p>
      {geoDataCountry && (
        <div className="max-w-[590px] mx-auto px-4">
          <div className="flex items-center mb-5">
            <h1 className="text-4xl text-black">{detailMetheroite.name}</h1>
            <p className="bg-blue-700 rounded-xl px-4 ml-5">
              {detailMetheroite.id}
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-5">
            <div className="grid grid-cols-[repeat(2,max-content)] grid-rows-[repeat(2,_min-content)] items-center text-gray-700 ">
              <FaWeightHanging className="mr-4" />
              <p className="">Mass</p>
              <p className="row-start-2 col-span-2 text-black font-bold text-center">
                {Number(detailMetheroite.mass).toLocaleString("en-US")} kg
              </p>
            </div>
            <div className="grid grid-cols-[repeat(2,max-content)] grid-rows-[repeat(2,_min-content)] items-center text-gray-700">
              <RxDashboard className="mr-4" />
              <p className="">Recclass</p>
              <p className="row-start-2 col-span-2 text-black font-bold text-center">
                {detailMetheroite.recclass}
              </p>
            </div>
            <div className="grid grid-cols-[repeat(2,max-content)] grid-rows-[repeat(2,_min-content)] items-center text-gray-700">
              <BsCalendar3 className="mr-4" />
              <p className="">Year</p>
              <p className="row-start-2 col-span-2 text-black font-bold text-center">
                {new Date(detailMetheroite.year).getFullYear()}
              </p>
            </div>
            <div className="grid grid-cols-[repeat(2,max-content)] grid-rows-[repeat(2,_min-content)] items-center text-gray-700">
              <PiMapPinFill className="mr-4" />
              <p className="">Location</p>
              <p className="row-start-2 col-span-2 text-black font-bold text-center">
                {geoDataCountry}
              </p>
            </div>
            <div className="grid grid-cols-[repeat(2,max-content)] grid-rows-[repeat(2,_min-content)] items-center text-gray-700">
              <MdEditDocument className="mr-4" />
              <p className="">Nametype</p>
              <p className="row-start-2 col-span-2 text-black font-bold text-center">
                {detailMetheroite.nametype}
              </p>
            </div>
            <div className="grid grid-cols-[repeat(2,max-content)] grid-rows-[repeat(2,_min-content)] items-center text-gray-700">
              <FaWind className="mr-4" />
              <p className="">Fall</p>
              <p className="row-start-2 col-span-2 text-black font-bold text-center">
                {detailMetheroite.fall}
              </p>
            </div>
            <div className="grid grid-cols-[repeat(2,max-content)] grid-rows-[repeat(2,_min-content)] items-center text-gray-700">
              <FaArrowsAltV className="mr-4" />
              <p className="">Reclat</p>
              <p className="row-start-2 col-span-2 text-black font-bold text-center">
                {Number(detailMetheroite.reclat).toFixed(4)}
              </p>
            </div>
            <div className="grid grid-cols-[repeat(2,max-content)] grid-rows-[repeat(2,_min-content)] items-center text-gray-700">
              <FaArrowsAltH className="mr-4" />
              <p className="">Reclat</p>
              <p className="row-start-2 col-span-2 text-black font-bold text-center">
                {Number(detailMetheroite.reclong).toFixed(4)}
              </p>
            </div>
          </div>
          <Bar options={yearOptions} data={yearData} />
          <Bar options={classOptions} data={classData} />
        </div>
      )}
    </div>
  );
};

export default MetheroiteDetailPage;

// [
//   {
//       "name": "Abee",
//       "id": "6",
//       "nametype": "Valid",
//       "recclass": "EH4",
//       "mass": "107000",
//       "fall": "Fell",
//       "year": "1952-01-01T00:00:00.000",
//       "reclat": "54.216670",
//       "reclong": "-113.000000",
//       "geolocation": {
//           "latitude": "54.21667",
//           "longitude": "-113.0"
//       }
//   }
// ]
