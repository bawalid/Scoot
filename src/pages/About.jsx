import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Singup from "./components/Singup";
import Values from "./components/Values";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./pages-css/About.css";
import AboutBackgrounddesktop from "../assets/images/about-hero-desktop.jpg";
import AboutBackgroundtablet from "../assets/images/about-hero-tablet.jpg";
import AboutBackgroundmobile from "../assets/images/about-hero-mobile.jpg";
import MobilityCircle from "../assets/images/digital-era.jpg";
import UrbanCircle from "../assets/images/better-living.jpg";

const About = (props) => {
  return (
    <div>
      <Header
        title="About"
        background={
          props.windowMode === "desktop"
            ? AboutBackgrounddesktop
            : props.windowMode === "tablet"
            ? AboutBackgroundtablet
            : AboutBackgroundmobile
        }
        windowMode={props.windowMode}
      />
      <section className="about s1">
        <Banner
          windowMode={props.windowMode}
          reverseArrow
          direction="right"
          number="1"
          img={MobilityCircle}
          title="Mobility for the digital era"
          description="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."
        />
        <Banner
          windowMode={props.windowMode}
          direction="left"
          number="2"
          img={UrbanCircle}
          title="Better urban living"
          description="We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."
        />
      </section>
      <section className="about s2">
        <Values title="Our values" windowMode={props.windowMode} />
      </section>
      <section className="about s3">
        <h2 className="about-s3-title">FAQs</h2>
        <div className={"about-works " + props.windowMode}>
          <h3>How it works</h3>
          <div className="questions">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="question1"
              >
                <Typography>How do I download the app?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  To download the Scoot app, you can search “Scoot” in both the
                  App and Google Play stores. An even simpler way to do it would
                  be to click the relevant link at the bottom of this page and
                  you’ll be re-directed to the correct page.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="question2"
              >
                <Typography>Can I find a nearby Scoots?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  To download the Scoot app, you can search “Scoot” in both the
                  App and Google Play stores. An even simpler way to do it would
                  be to click the relevant link at the bottom of this page and
                  you’ll be re-directed to the correct page.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="question3"
              >
                <Typography>Do I need a license to ride?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  To download the Scoot app, you can search “Scoot” in both the
                  App and Google Play stores. An even simpler way to do it would
                  be to click the relevant link at the bottom of this page and
                  you’ll be re-directed to the correct page.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className={"about-driving " + props.windowMode}>
          <h3>Safe driving</h3>
          <div className="questions">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="question1"
              >
                <Typography>Should I wear a helmet?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes, please do! All cities have different laws. But we
                  strongly strongly strongly recommend always wearing a helmet
                  regardless of the local laws. We like you and we want you to
                  be as safe as possible while Scooting.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="question2"
              >
                <Typography>How about the rules & regulations?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  To download the Scoot app, you can search “Scoot” in both the
                  App and Google Play stores. An even simpler way to do it would
                  be to click the relevant link at the bottom of this page and
                  you’ll be re-directed to the correct page.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="question3"
              >
                <Typography>What if I damage my Scoot?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  To download the Scoot app, you can search “Scoot” in both the
                  App and Google Play stores. An even simpler way to do it would
                  be to click the relevant link at the bottom of this page and
                  you’ll be re-directed to the correct page.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </section>
      <section id="singup">
        <Singup windowMode={props.windowMode} />
      </section>
    </div>
  );
};

export default About;
