import React from "react";
import numeral from "numeral";

import "./assets/css/Table.css";

function Table({ countries }) {
  return (
    <div className="table">
      <div className="table__heading">
        <p className="table__col-1">Country</p>
        <p className="table__col-2">Cases</p>
      </div>

      <div className="table__content">
        {countries.map(({ country, cases, countryInfo }) => (
          <div className="table__row">
            <p className="table__col-1">
              <div className="table-flag" style={{ backgroundImage: `url(${countryInfo.flag})` }} />
              {country}
            </p>
            <p className="table__col-2">{numeral(cases).format("0,0")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;
