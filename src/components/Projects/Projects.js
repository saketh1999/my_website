import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import geminiApp from "../../Assets/Projects/GeminiChatApp.png";
import petApp from "../../Assets/Projects/PetAdoption.png";
 import studentperformance from "../../Assets/Projects/StudentPerformance.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={petApp}
              isBlog={false}
              title="AdoptMe"
              description="This web application exemplifies the utilization of React, a cutting-edge JavaScript library, to construct a dynamic and user-centric platform for pet adoption. By harnessing the strengths of React's component-based architecture and integrating well-established libraries, the application fosters a seamless and engaging experience for potential pet adopters seeking their furry (or feathery) companions."
              ghLink="https://github.com/saketh1999/adopt-me-petapp"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studentperformance}
              isBlog={false}
              title="Student Performace Indicator"
              description="This research project delves into the application of a diverse array of machine learning algorithms for the crucial task of student performance prediction.  Understanding and predicting student performance is a cornerstone of improving educational outcomes, empowering educators to tailor their methods and identify areas for intervention. This study investigates the efficacy of a comprehensive suite of algorithms"
              ghLink="https://github.com/saketh1999/Student_Performance"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={geminiApp}
              isBlog={false}
              title="Gemini Chat App"
              description="This Android application serves as a comprehensive exploration of integrating state-of-the-art generative AI models, exemplified by Google's Gemini architecture, into the mobile development landscape. By incorporating these powerful algorithms, developers can construct innovative features and applications that harness the capabilities of machine learning for a transformative user experience."
              ghLink="https://github.com/saketh1999/GeminiChatApp"            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
