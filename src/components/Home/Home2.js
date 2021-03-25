import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Once upon a time i felt in love with PHP-based bots, so i decided
              to learn PHP myself to make one and i ended up falling in love
              with coding and here i am now creating my own sites, and much more
              other stuff like game servers and discord bots, apart from that
              I think i am good at it… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> PHP, JS, HTML, CSS & SQL. </b>
              </i>
              <br />
              <br />
              My current focus is on &nbsp;
              <i>
                <b className="purple">
                  Learning new languages and other sides of developing.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with
              <i>
                <b className="purple"> Modern Frameworks</b>
              </i>
                &nbsp; like
              <i>
                <b className="purple"> Laravel or React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/szalikdev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/szalikdev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://szalik.dev/socials.php?social=discord"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-discord"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/szalik.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
