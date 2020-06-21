import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class DigitalMachineMap extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        initialCenter={{ lat: 53.490449, Ing: 113.397332 }}
        className="map"
      />
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "TOKEN HERE",
})(DigitalMachineMap);
