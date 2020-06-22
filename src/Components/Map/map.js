import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

const API_KEY = `${process.env.REACT_APP_API_KEY_YT}`;

const containerStyle = {
  position: "relative",
  width: "100%",
  height: "450px",
};

class DigitalMachineMap extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={17}
        containerStyle={containerStyle}
        initialCenter={{ lat: 53.490466, lng: -113.397381 }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"Current location"}
          title={"Digital Machine Ltd."}
          position={{ lat: 53.49099, lng: -113.396927 }}
        />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>Digital Machine</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: API_KEY,
})(DigitalMachineMap);
