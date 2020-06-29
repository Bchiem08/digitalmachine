import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import "./photocards.css";

export default function PhotoCard(props) {
  return (
    <Card class="photocard">
      <CardMedia className="photos" image={props.image}>
        <CardContent>
          <Typography
            variant="h6"
            className="caption"
            style={{ fontFamily: "Open Sans" }}
          >
            {props.caption}
          </Typography>
        </CardContent>
      </CardMedia>
    </Card>
  );
}
