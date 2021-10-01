import React from "react";
import { Col, Image } from "react-bootstrap";

export default function About() {
  return (
    <div className="container p-5">
      <Col xs={6} md={4} className="m-auto">
        <Image style={{ width: "90%" }} src={process.env.PUBLIC_URL + "/images/me.jpg"} roundedCircle />
      </Col>
      <h1>About Me</h1>
      <p className="p-3">
        Detail-oriented full-stack web developer leveraging I.T./Cybersecurity background to build more engaging and
        secure applications on the web. Currently earning a certificate in full stack development from the University of
        Denver, gaining skills in MongoDB, Express.js, React.js, and Node.js (MERN stack) as well as architecture &
        design. Known as an analytical problem solver with a never-ending desire to constantly improve skills. With each
        project, my aim is to fully understand my customer’s desired outcome and exceed their expectations. I’m excited
        to leverage my skills as part of a fast-paced, quality-driven team to create better experiences on the web.
      </p>
    </div>
  );
}
