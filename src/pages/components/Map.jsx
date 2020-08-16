import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";
import "./components-css/Map.css";

const Map = ({ location, zoomLevel, windowMode }) => {
  return (
    <div className={"map" + windowMode}>
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDWDsIiyIwAFDR4jF-RoegyzbpEKixFbCA" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
