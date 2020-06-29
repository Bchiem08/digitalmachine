import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import MachineCard from "./machinecard";

const imagePath = process.env.PUBLIC_URL + "/photos";

const cards = [
  {
    image: imagePath + "/vx750creen.png",
    name: "Hyundai VX750M",
    axis: "axis: 5",
    length: "table: 1800 x 700",
    rpm: "Max RPM: 4500rpm",
    control: "Fanuc 18i-MB",
  },
  {
    image: imagePath + "/400lscreen.png",
    name: "Doosan Puma 400L",
    axis: "axis: 3",
    length: "length: 2169mm",
    rpm: "Max RPM: 2000rpm",
    control: "Fanuc 18-T",
  },
  {
    image: imagePath + "/300lscreen.png",
    name: "Doosan Puma 300L",
    axis: "axis: 2",
    length: "length: 1280mm",
    rpm: "Max RPM: 2800rpm",
    control: "Fanuc 21i-T",
  },
  {
    image: imagePath + "/400lmcscreen.png",
    name: "Hyundai SKT400lmc",
    axis: "axis: 2",
    length: "length: 2200mm",
    rpm: "Max RPM: 2000rpm",
    control: "Fanuc 21i-TC",
  },
  {
    image: imagePath + "/480lscreen.png",
    name: "Doosan Puma 480L",
    axis: "axis: 2",
    length: "length: 2001mm",
    rpm: "Max RPM: 1500rpm",
    control: "Funac 32i-A",
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
          <Grid xs={12} sm={12} md={6} lg={6} xl={4} className="cardgrid">
            <MachineCard
              key={"card" + index}
              image={cards.image}
              name={cards.name}
              axis={cards.axis}
              length={cards.length}
              rpm={cards.rpm}
              control={cards.control}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}
