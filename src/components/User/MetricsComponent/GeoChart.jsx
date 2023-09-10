import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"
import {useEffect, useState} from "react";
import axios from "axios";
import {APP_TOKEN, PUBLIC_API_URL} from "../../../constants/urls.js";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export const GeoChart = () => {
  const [allData, setAllData] = useState([])
  const [markers, setMarkers] = useState([])

  const getMeteorite = () => {
    axios
      .get(PUBLIC_API_URL, { $$app_token: APP_TOKEN })
      .then((res) => {
        setAllData(res.data)
      });

  };

  const getMarkers = () => {
    let arr = []
    allData.forEach(item => {
      arr.push({
        coordinates: [item.reclong, item.reclat]
      })
    })
    setMarkers(arr)
  }

  useEffect(() => {
    getMeteorite();
  }, []);

  useEffect(() => {
    if (allData.length > 0) {
      getMarkers()
    }
  }, [allData])

  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={5} fill="#F00" stroke="#fff" strokeWidth={2} />
        </Marker>
      ))}
    </ComposableMap>
  )
}