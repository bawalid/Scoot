import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "./pages-css/Home.css";
import Step from "./components/Step";
import Banner from "./components/Banner";
import Singup from "./components/Singup";

import homeBackgrounddesktop from "../assets/images/home-hero-desktop.jpg";
import homeBackgroundtablet from "../assets/images/home-hero-tablet.jpg";
import homeBackgroundmobile from "../assets/images/home-hero-mobile.jpg";
import locateCircle from "../assets/icons/locate.svg";
import scooterCircle from "../assets/icons/scooter.svg";
import rideCircle from "../assets/icons/ride.svg";
import circletelemetry from "../assets/images/telemetry.jpg";
import circlenearYou from "../assets/images/near-you.jpg";
import circlepayment from "../assets/images/payments.jpg";

const Home = (props) => {
  const [circleX, setcircleX] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const items = document.querySelectorAll(".three-circles");
    function calculateBackLineWidth() {
      const lastCircle = items[0].lastChild.childNodes[0];
      const position = lastCircle.getBoundingClientRect();
      setcircleX({
        left: position.left + 48,
        top: position.top + 150,
      });
    }
    if (items) {
      calculateBackLineWidth();
    }

    window.addEventListener("resize", () => {
      if (items) {
        calculateBackLineWidth();
      }
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <div>
      <Header
        title="Scooter sharing made simple"
        hasContents
        description="Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities.
        Use our app to locate the nearest bike, unlock it with a tap, and you’re away!"
        background={
          props.windowMode === "desktop"
            ? homeBackgrounddesktop
            : props.windowMode === "tablet"
            ? homeBackgroundtablet
            : homeBackgroundmobile
        }
        windowMode={props.windowMode}
      />
      <section className="s1">
        {props.windowMode !== "mobile" && (
          <div
            className={"back-line " + props.windowMode}
            style={{
              width: props.windowMode === "desktop" && circleX.left,
              height:
                (props.windowMode === "tablet" ||
                  props.windowMode === "mobile") &&
                circleX.top,
            }}
          />
        )}
        <div className={"three-circles " + props.windowMode}>
          <Step
            icon={locateCircle}
            title="Locate with app"
            description="Use the app to find the nearest scooter to you. We are
              continuously placing scooters in the areas with most demand, so
              one should never be too far away."
            windowMode={props.windowMode}
          />
          <Step
            icon={scooterCircle}
            title="Pick your scooter"
            description="We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost."
            windowMode={props.windowMode}
          />
          <Step
            icon={rideCircle}
            title="Enjoy the ride"
            description="Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps."
            windowMode={props.windowMode}
          />
        </div>
      </section>
      <section className="s2">
        <Banner
          windowMode={props.windowMode}
          direction="right"
          number="1"
          img={circletelemetry}
          title="Easy to use riding telemetry"
          description="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
        />
        <Banner
          windowMode={props.windowMode}
          direction="left"
          number="2"
          img={circlenearYou}
          title="Coming to a city near you"
          description="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
        />
        <Banner
          windowMode={props.windowMode}
          direction="right"
          number="3"
          img={circlepayment}
          title="Zero hassle payments"
          description="Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
        />
      </section>
      <section id="singup">
        <Singup windowMode={props.windowMode} />
      </section>
    </div>
  );
};

export default Home;
