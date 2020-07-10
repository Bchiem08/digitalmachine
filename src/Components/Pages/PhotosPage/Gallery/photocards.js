import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import "./photocards.css";

export default function PhotoCard(props) {
  return (
    <Card class="photocard">
      <CardMedia className="photos" image={props.image}></CardMedia>
    </Card>
  );
}
