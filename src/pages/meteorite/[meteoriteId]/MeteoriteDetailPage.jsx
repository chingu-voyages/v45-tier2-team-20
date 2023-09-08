import {MetricsComponentDetail} from "../../../components/User/MetricsComponent/MetricsComponentDetail.jsx";
import {Card} from "../../../components/UI/Card.jsx";
import {MeteoriteLineLoading} from "../../../components/User/DataSummaryComponent/MeteoriteLineLoading.jsx";
import {MeteoriteLine} from "../../../components/User/DataSummaryComponent/MeteoriteLine.jsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {APP_TOKEN, PUBLIC_API_URL} from "../../../constants/urls.js";

export const MeteoriteDetailPage = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const [allData, setAllData] = useState(0)

  const getMeteorite = () => {
    setLoading(true);
    axios
      .get(PUBLIC_API_URL, { $$app_token: APP_TOKEN })
      .then((res) => {
        const meteorite = res.data.find(item => item.id === params.meteoriteId)
        setData(meteorite);
        setAllData(res.data)
        setLoading(false);
      });

  };

  useEffect(() => {
    getMeteorite();
  }, []);

  return (
    <div className="mb-auto">
      <div className="flex justify-between gap-4 my-[120px] px-[20px]">
        <Card className="shadow-lg shadow-indigo-300 w-[50%] mx-auto">
          <div>
            {loading && (
              <MeteoriteLineLoading />
            )}
            {!loading && (
              <>
                {data &&
                  <MeteoriteLine data={data}/>
                }
              </>
            )}
          </div>
        </Card>
        <MetricsComponentDetail data={data} allData={allData}/>
      </div>
    </div>
  )
}