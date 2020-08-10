import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    hex: "#ec4887",
    multiplier: 800,
  },
  recovered: {
    hex: "#875fc0",
    multiplier: 1200,
  },
  deaths: {
    hex: "#46c5f2",
    multiplier: 2000,
  },
};

export const sortData = (data) => {
  const sortedData = [...data];

  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
};

// Draw circles on map with interactive tooltip
export const showDataOnMap = (data, caseType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColors[caseType].hex}
      fillColor={casesTypeColors[caseType].hex}
      radius={Math.sqrt(country[caseType]) * casesTypeColors[caseType].multiplier}
    >
      <Popup>
        <div className="popup-container">
          <div className="popup-header">
            <div
              className="popup-flag"
              style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
            />
            <div className="popup-country">{country.country}</div>
          </div>
          <div className="popup-confirmed">Cases: {numeral(country.cases).format("0,0")}</div>
          <div className="popup-recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="popup-deaths">Deaths: {numeral(country.deaths).format("0,0")}</div>
        </div>
      </Popup>
    </Circle>
  ));
