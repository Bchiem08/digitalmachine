import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import "./photocards.css";

export default function PhotoCard(props) {
  return (
    <Card>
      <CardMedia>
        <CardContent>
          <Typography>Hi</Typography>
        </CardContent>
      </CardMedia>
    </Card>
  );
}
