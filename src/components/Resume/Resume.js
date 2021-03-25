import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import axios from "axios";
//import pdf from "../../Assets/Soumyajit-Behera.pdf";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          {/* <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button> */}
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Truckyapp Service Team"
              date="2021 - now"
              content={[
                'Managing tickets created by users, answering questions and general "customer" support'
              ]}
            />
            <Resumecontent
              title="OpenCAD contributor"
              date="2021 - now"
              content={[
                'OpenCAD is an open source computer aided dispatch system for roleplay communities written in PHP.'
              ]}
            />
            <Resumecontent
              title="StatePD Founder"
              date="2020 - 2021"
              content={[
                'StatePD was a FivePD based FiveM server that was focusing on a Police-based roleplay'
              ]}
            />
          </Col>
          {/* <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="IMSC MATHS AND COMPUTING [BIT Mesra, Ranchi] "
              date="2018 - Present"
              content={[`CGPA: ${cgpa} (Till ${sem}th Sem)`]}
            />
            <Resumecontent
              title="12TH BOARD [ODM Public School,Odisha]"
              date="2015 - 2017"
              content={["Precentage: 88%"]}
            />
            <Resumecontent
              title="10TH BOARD [ST Mary's School,Odisha] "
              date="2005 - 2015"
              content={["Precentage: 86%"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            />
          </Col> */}
        </Row>
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Resume;
