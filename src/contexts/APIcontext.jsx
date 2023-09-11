import PropTypes from "prop-types";
import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { APP_TOKEN, PUBLIC_API_URL } from "../constants/urls";

const ApiContext = createContext();

export function useApi() {
    return useContext(ApiContext);
}

export function ApiContextProvider({ children }) {
    const [meteoriteData, setMeteoriteData] = useState([]);
    const [searchInputValue, setSearchInputValue] = useState("");

    const getMeteoriteDataWithAxios = async () => {
        const response = await axios.get(PUBLIC_API_URL, { $$app_token: APP_TOKEN });
        setMeteoriteData(response.data);
    };

    useEffect(() => {
        getMeteoriteDataWithAxios();
    }, []);

    return (
        <ApiContext.Provider value={{ meteoriteData, searchInputValue, setSearchInputValue }}>
            {children}
        </ApiContext.Provider>
    );
}

ApiContextProvider.propTypes = {
    children: PropTypes.element
};