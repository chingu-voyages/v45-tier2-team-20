import {Card} from "../../UI/Card.jsx";

export const MetricsComponentDetail = ({data}) => {

  return (
      <Card className="shadow-lg shadow-indigo-300 w-[60%] mx-auto px-[20px] py-[30px]">
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
  )
}