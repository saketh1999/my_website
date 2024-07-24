import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi You, I am <span className="purple">Sri Sai Saketh </span>
            from <span className="purple"> Santa Clara, CA.</span>
            <br />
            I am currently pursuing my <span className="purple">Masters in Computer Science</span> at Santa Clara University.
            <br />
            I am actively volunteering at a Non Profit - <span className="purple">Disaster Accountability Project</span>, helping them build their website.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A computer is like a violin. No one knows what it sounds like before you play it!"{" "}
          </p>
          <footer className="blockquote-footer">Alan Perlis</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
