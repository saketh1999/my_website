import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiWindows,
  SiVite,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
        <h4>Windows OS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
        <h4>Mac Operating System</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h4>Visual Studio Code</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h4>Postman</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <h4>Slack</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <h4>Vercel</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVite />
        <h4>Vite</h4>
      </Col>
    </Row>
  );
}

export default Toolstack;
