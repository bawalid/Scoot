import React from "react";
import Header from "./components/Header";
import Singup from "./components/Singup";
import MapSection from "./components/Map";
import BannerContent from "./components/BannerContent";
import Btn from "./components/Btn";
import "./pages-css/Locations.css";

import CareersBackgroundDesktop from "../assets/images/careers-locations-hero-desktop.jpg";
import CareersBackgroundTablet from "../assets/images/careers-locations-hero-tablet.jpg";
import CareersBackgroundMobile from "../assets/images/careers-location-hero-mobile.jpg";

const Locations = (props) => {
  const location = {
    address: "Scoot offical store.",
    lat: 37.42216,
    lng: -122.08427,
  };

  return (
    <div className={"locations " + props.windowMode}>
      <Header
        title="Locations"
        background={
          props.windowMode === "desktop"
            ? CareersBackgroundDesktop
            : props.windowMode === "tablet"
            ? CareersBackgroundTablet
            : CareersBackgroundMobile
        }
        windowMode={props.windowMode}
      />
      <MapSection
        location={location}
        zoomLevel={17}
        windowMode={props.windowMode}
      />
      {props.windowMode === "mobile" && (
        <div className="store-location-mobile">
          <div>
            <h4>New York</h4>
          </div>
          <div>
            <h4>London</h4>
          </div>
          <div>
            <h4>Jakarta</h4>
          </div>
          <div>
            <h4>Yokohama</h4>
          </div>
        </div>
      )}
      <div className="locations-content">
        <BannerContent
          className="banner-content"
          title="Your city not listed?"
          description="If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social."
        />
        <Btn btnTitle="Message Us" />
      </div>
      <section id="singup">
        <Singup windowMode={props.windowMode} />
      </section>
    </div>
  );
};

export default Locations;
