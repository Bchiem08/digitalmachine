import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import PhotoCard from "./photocards";

const imagePath = process.env.PUBLIC_URL + "/photos";

const photos = [
  {
    image: imagePath + "/vx750creen.png",
  },
];

export default class Gallery extends Component {
  render() {
    return (
      <Grid container spacing={10}>
        {photos.map((photos, index) => (
          <Grid>
            <PhotoCard key={"card" + index} />
          </Grid>
        ))}
      </Grid>
    );
  }
}
