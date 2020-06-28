import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";
import "./machinecard.css";

export default function MachineCard(props) {
  return (
    <Card className="machinecard">
      <CardMedia className="media" image={props.image}>
        <CardContent className="textbox">
          <Typography
            variant="h4"
            className="machinecardtitle"
            style={{ fontFamily: "Fjalla One" }}
          >
            {props.name}
          </Typography>
          <Typography
            variant="h5"
            className="machinecardtext"
            style={{ fontFamily: "Fjalla One" }}
          >
            <div style={{ height: "40px" }} />
            {props.axis}
          </Typography>
          <Typography
            variant="h5"
            className="machinecardtext"
            style={{ fontFamily: "Fjalla One" }}
          >
            {props.length}
          </Typography>
          <Typography
            variant="h5"
            className="machinecardtext"
            style={{ fontFamily: "Fjalla One" }}
          >
            {props.rpm}
          </Typography>
          <Typography
            variant="h5"
            className="machinecardtext"
            style={{ fontFamily: "Fjalla One" }}
          >
            {props.control}
          </Typography>
        </CardContent>
      </CardMedia>
    </Card>
  );
}
