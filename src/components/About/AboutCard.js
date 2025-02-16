import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jakub Sochalec </span>
            from <span className="purple"> Ahlen, Germany.</span>
            <br />I am self learned Web-Developer with aspirations
            to become Developer in multiple coding languages.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Playing Games
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Streaming
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Travelling
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Partying
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Everyone has to start somewhere so don't be afraid of working on something that someone made, just make sure you learn troughout the journey!"{" "}
          </p>
          <footer className="blockquote-footer">szalik.dev</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
