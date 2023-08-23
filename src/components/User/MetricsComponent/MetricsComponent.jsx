import {Card} from "../../UI/Card.jsx";
import {FaArrowsAltH, FaArrowsAltV, FaWeightHanging, FaWind} from "react-icons/fa";
import {RxDashboard} from "react-icons/rx";
import {BsCalendar3} from "react-icons/bs";
import {PiMapPinFill} from "react-icons/pi";
import {MdEditDocument} from "react-icons/md";
import {Bar} from "react-chartjs-2";

export const MetricsComponent = () => {
  return (
    <div className="flex justify-between gap-4 my-[120px] px-[20px]">
      <Card className="shadow-lg shadow-indigo-300 w-[50%] mx-auto px-[20px] py-[50px]">
        <div className="max-w-[590px] mx-auto px-4">
          <div className="flex items-center mb-5">
            <h1 className="text-4xl text-gray-700">Aachen</h1>
            <p className="bg-blue-700 rounded-xl px-4 ml-5">
              1
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-5">
            <div className="grid grid-cols-[repeat(2,max-content)] grid-rows-[repeat(2,_min-content)] items-center text-gray-700 ">
              <FaWeightHanging className="mr-4" />
              <p className="">Mass</p>
              <p className="row-start-2 col-span-2 text-black font-bold text-center">
                21 kg
              </p>
            </div>
            <div className="grid grid-cols-[repeat(2,max-content)] grid-rows-[repeat(2,_min-content)] items-center text-gray-700">
              <RxDashboard className="mr-4" />
              <p className="">Recclass</p>
              <p className="row-start-2 col-span-2 text-black font-bold text-center">
                L5
              </p>
            </div>
            <div className="grid grid-cols-[repeat(2,max-content)] grid-rows-[repeat(2,_min-content)] items-center text-gray-700">
              <BsCalendar3 className="mr-4" />
              <p className="">Year</p>
              <p className="row-start-2 col-span-2 text-black font-bold text-center">
                1970
              </p>
            </div>
            <div className="grid grid-cols-[repeat(2,max-content)] grid-rows-[repeat(2,_min-content)] items-center text-gray-700">
              <PiMapPinFill className="mr-4" />
              <p className="">Location</p>
              <p className="row-start-2 col-span-2 text-black font-bold text-center">
                Germany
              </p>
            </div>
            <div className="grid grid-cols-[repeat(2,max-content)] grid-rows-[repeat(2,_min-content)] items-center text-gray-700">
              <MdEditDocument className="mr-4" />
              <p className="">Nametype</p>
              <p className="row-start-2 col-span-2 text-black font-bold text-center">
                Valid
              </p>
            </div>
            <div className="grid grid-cols-[repeat(2,max-content)] grid-rows-[repeat(2,_min-content)] items-center text-gray-700">
              <FaWind className="mr-4" />
              <p className="">Fall</p>
              <p className="row-start-2 col-span-2 text-black font-bold text-center">
                Fell
              </p>
            </div>
            <div className="grid grid-cols-[repeat(2,max-content)] grid-rows-[repeat(2,_min-content)] items-center text-gray-700">
              <FaArrowsAltV className="mr-4" />
              <p className="">Reclat</p>
              <p className="row-start-2 col-span-2 text-black font-bold text-center">
                50.7750
              </p>
            </div>
            <div className="grid grid-cols-[repeat(2,max-content)] grid-rows-[repeat(2,_min-content)] items-center text-gray-700">
              <FaArrowsAltH className="mr-4" />
              <p className="">Reclat</p>
              <p className="row-start-2 col-span-2 text-black font-bold text-center">
                6.0833
              </p>
            </div>
          </div>
        </div>
      </Card>
      <Card className="shadow-lg shadow-indigo-300 w-[50%] mx-auto px-[20px] py-[30px]">
        <div className="flex justify-center gap-[12px]">
          <div className="text-indigo-600 rounded-md px-[16px] py-[4px] border border-indigo-600 font-medium">
            Number of strikes
          </div>
          <div className="text-indigo-600 rounded-md px-[16px] py-[4px] border border-indigo-600 font-medium">
            Average mass
          </div>
          <div className="text-indigo-600 rounded-md px-[16px] py-[4px] border border-indigo-600 font-medium">
            Strikes by year
          </div>
          <div className="text-indigo-600 rounded-md px-[16px] py-[4px] border border-indigo-600 font-medium">
            Strikes by composition
          </div>
        </div>
      </Card>
    </div>
  )
}