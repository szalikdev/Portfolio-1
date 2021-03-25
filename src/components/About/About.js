import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who <strong className="purple">Am</strong> I
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-php-plain" Name="PHP" />
          <Techstack iconName="devicon-html5-plain" Name="HTML5" />
          <Techstack iconName="devicon-css3-plain" Name="CSS3" />
          <Techstack iconName="devicon-mysql-plain" Name="MySQL" />
          <Techstack iconName="devicon-javascript-plain" Name="JavaScript" />
          <Techstack iconName="devicon-laravel-plain" Name="Laravel" />
          <Techstack iconName="devicon-nodejs-plain" Name="Node.js" />
          <Techstack iconName="devicon-npm-original-wordmark" Name="NPM" />
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-visualstudio-plain" Name="Visual Studio" />
          <Techstack iconName="devicon-ubuntu-plain" Name="Ubuntu" />
          <Techstack iconName="devicon-photoshop-plain" Name="Photoshop" />
        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
