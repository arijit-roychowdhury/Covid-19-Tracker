import React from "react";
import numeral from "numeral";
import { Card, CardContent, Typography, createStyles } from "@material-ui/core";

import "./InfoBox.css";

function InfoBox({ title, cases, total, ...props }) {
  return (
    <Card onClick={props.onClick} className="infoBox">
      <CardContent>
        {/* Title */}
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>

        {/* Number of Total Cases */}
        <h2 className="infoBox__cases">{numeral(total).format("0,0")}</h2>

        {/* Today */}
        <Typography className="infoBox__today" color="textSecondary">
          + {numeral(cases).format("0,0")}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
