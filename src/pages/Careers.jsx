import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Singup from "./components/Singup";
import Values from "./components/Values";
import JobCard from "./components/JobCard";

import "./pages-css/Careers.css";
import CareersBackgroundDesktop from "../assets/images/careers-locations-hero-desktop.jpg";
import CareersBackgroundTablet from "../assets/images/careers-locations-hero-tablet.jpg";
import CareersBackgroundMobile from "../assets/images/careers-location-hero-mobile.jpg";
import JoinCircle from "../assets/images/join-us.jpg";

const Careers = (props) => {
  return (
    <div>
      <Header
        title="Careers"
        background={
          props.windowMode === "desktop"
            ? CareersBackgroundDesktop
            : props.windowMode === "tablet"
            ? CareersBackgroundTablet
            : CareersBackgroundMobile
        }
        windowMode={props.windowMode}
      />
      <section className="careers s1">
        <Banner
          windowMode={props.windowMode}
          reverseArrow
          direction="right"
          number="1"
          img={JoinCircle}
          title="Care to join our mission?"
          description="We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
        />
      </section>
      <section className="careers s2">
        <Values title="Why join us?" windowMode={props.windowMode} />
      </section>
      <section className={"careers s3 " + props.windowMode}>
        <JobCard
          title="General Manager"
          description="Jakarta, Indonesia"
          windowMode={props.windowMode}
        />
        <JobCard
          title="UI/UX Designer"
          description="Yokohama, Japan"
          windowMode={props.windowMode}
        />
        <JobCard
          title="Blog Content Copywriter"
          description="New York, United States"
          windowMode={props.windowMode}
        />
        <JobCard
          title="Graphic Designer"
          description="New York, United States"
          windowMode={props.windowMode}
        />
        <JobCard
          title="Fleet Supervisor"
          description="Jakarta, Indonesia"
          windowMode={props.windowMode}
        />
        <JobCard
          title="UX Analyst"
          description="London, United Kingdom"
          windowMode={props.windowMode}
        />
      </section>
      <section id="singup">
        <Singup windowMode={props.windowMode} />
      </section>
    </div>
  );
};

export default Careers;
