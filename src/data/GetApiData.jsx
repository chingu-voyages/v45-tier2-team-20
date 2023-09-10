import { useEffect, useState } from "react";
import axios from "axios";
import { APP_TOKEN, PUBLIC_API_URL } from "../constants/urls";

export const GetApiData = () => {
    const [meteoriteData, setMeteoriteData] = useState([]);

    const getMeteoriteDataWithAxios = async () => {
        const response = await axios.get(PUBLIC_API_URL, { $$app_token: APP_TOKEN });
        setMeteoriteData(response.data);
    };

    useEffect(() => {
        getMeteoriteDataWithAxios();
    }, []);

    return { meteoriteData }
}
