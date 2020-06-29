import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import PhotoCard from "./photocards";
import { photos } from "./photosdata";
export default class Gallery extends Component {
  render() {
    return (
      <Grid
        container
        spacing={10}
        style={{
          marginTop: "50px",
          marginLeft: "11%",
          marginRight: "11%",
          maxWidth: "80%",
        }}
      >
        {photos.map((photo, index) => (
          <Grid xs={12} sm={12} md={6} lg={6} xl={4}>
            <PhotoCard
              key={"card" + index}
              image={photo.image}
              caption={photo.caption}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}
