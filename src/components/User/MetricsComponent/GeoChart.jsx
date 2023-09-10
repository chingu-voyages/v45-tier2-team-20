import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"
import {useEffect, useState} from "react";
import axios from "axios";
import {APP_TOKEN, PUBLIC_API_URL} from "../../../constants/urls.js";
import {Tooltip} from "react-tooltip";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export const GeoChart = () => {
  const [allData, setAllData] = useState([])
  const [markers, setMarkers] = useState([])
  const [tooltipContent, setTooltipContent] = useState("");

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
        name: item.name,
        recclass: item.recclass,
        mass: item.mass,
        year: new Date(item.year).getFullYear(),
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

  const showTooltip = (name, recclass, mass, year) => {
    setTooltipContent(`
      Name: <b>${name}</b> <br/>
      Reclass: <b>${recclass}</b> <br/>
      Mass: <b>${mass}</b> <br/>
      Year: <b>${year}</b>
    `)
  }

  return (
    <div>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        {markers.map(({ name, recclass, mass, year, coordinates }) => (
          <Marker
            key={name}
            coordinates={coordinates}
            className="my-anchor-element"
            data-tooltip-html={tooltipContent}
            onMouseEnter={() => {
              showTooltip(name, recclass, mass, year)
            }}
            onMouseLeave={() => {
              setTooltipContent("");
            }}
          >
            <circle r={5} fill="#F00" stroke="#fff" strokeWidth={2} />
          </Marker>
        ))}
      </ComposableMap>
      <Tooltip anchorSelect=".my-anchor-element" place="top" />
    </div>
  )
}