import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
//import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import apps_system from "../../Assets/Projects/apps_system.png";
import ticketsbot from "../../Assets/Projects/ticketsbot.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apps_system}
              isBlog={false}
              title="Applications System"
              description="Laravel based Applications System to write, manage, accept & deny applications made by users. It uses Discord authentication and permissions by Guild ID and Roles ID, it was originally created for my FiveM project to manage Staff applications and more but project was closed. You can preview it clicking button below."
              link="https://apply.statepd.gg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticketsbot}
              isBlog={false}
              title="Discord Ticket Bot"
              description="Discord bot written with Discord.js API to create and manage tickets created by users, it works with mysql so all tickets and replies are stored in mysql."
              link="https://github.com/szalikdev/ticketbot"
            />
          </Col>
        </Row>
        {/* <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link=""
              title="Cracking Interview"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="Plant AI"
              site="medium.com"
            />
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Projects;
