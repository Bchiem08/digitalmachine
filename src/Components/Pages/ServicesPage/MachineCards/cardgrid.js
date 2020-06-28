import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import MachineCard from "./machinecard";

const imagePath = process.env.PUBLIC_URL + "/photos";

const cards = [
  {
    image: imagePath + "",
    name: "",
    axis: "",
    length: "",
    control: "",
  },
  {
    image: imagePath + "",
    name: "",
    axis: "",
    length: "",
    control: "",
  },
  {
    image: imagePath + "",
    name: "",
    axis: "",
    length: "",
    control: "",
  },
  {
    image: imagePath + "",
    name: "",
    axis: "",
    length: "",
    control: "",
  },
  {
    image: imagePath + "",
    name: "",
    axis: "",
    length: "",
    control: "",
  },
];

export default class CardGrid extends Component {
  render() {
    return (
      <Grid
        container
        spacing={10}
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          maxWidth: "80%",
          marginBottom: "100px",
        }}
      >
        {cards.map((cards, index) => (
          <Grid xs={12} sm={12} md={6} lg={6} xl={6} className="cardgrid">
            <MachineCard
              key={"card" + index}
              image={cards.image}
              name={cards.name}
              axis={cards.axis}
              length={cards.length}
              control={cards.control}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}
