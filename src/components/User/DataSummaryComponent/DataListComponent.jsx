import { Card } from "../../UI/Card";
//import { Button } from "../../UI/Button";
import { useEffect, useState, useMemo } from "react";
//import { HiChevronUp, HiChevronDown } from "react-icons/hi2";
import { MeteoriteLine } from "./MeteoriteLine";
import { MeteoriteLineLoading } from "./MeteoriteLineLoading";
import { Pagination } from "../../UI/Pagination/Pagination";
import { PUBLIC_API_URL, APP_TOKEN } from "../../../constants/urls";
import { ToggleButton } from "../../UI/ToggleButton";
import axios from "axios";

export const DataListComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [toggle, setToggle] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const PageSize = 9;

  const NUMBER = 1000;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  const getAllMeteorite = () => {
    setLoading(true);
    axios
      .get(`${PUBLIC_API_URL}?$limit=${NUMBER}&$$app_token=${APP_TOKEN}`)
      .then((res) => {
        setLoading(false);
        setData(res.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllMeteorite();
  }, []);

  return (
    <div className="flex justify-between my-[120px] px-[20px]">
      <Card className="shadow-md shadow-indigo-200 w-full">
        <div className="block md:flex md:space-y-3 justify-between items-center pb-5 p-3">
          <h3 className="font-semibold text-black text-2xl">
            #{data.length} Meteorites strikes
          </h3>
          <div className="flex">
            <ToggleButton name={"Name"} />
            <ToggleButton name={"Recclass"} />
            <ToggleButton name={"Mass"} />
            <ToggleButton name={"Year"} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-2 max-h-[600px] overflow-auto">
          {loading && (
            <>
              <MeteoriteLineLoading />
              <MeteoriteLineLoading />
              <MeteoriteLineLoading />
              <MeteoriteLineLoading />
              <MeteoriteLineLoading />
              <MeteoriteLineLoading />
            </>
          )}
          {!loading && (
            <>
              {data.length > 0 &&
                currentTableData.map((item) => (
                  <MeteoriteLine key={item.id} data={item} />
                ))}
            </>
          )}
        </div>
        <div className="flex p-3 justify-center">
          <Pagination
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </Card>
    </div>
  );
};
