import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const projects = [
  {
    name: "Budget App",
    description: "PWA",
    id: 1,
  },
  {
    name: "Zero",
    description: "A kind soul",
    id: 2,
  },
  {
    name: "Walter",
    description: "Friend for life",
    id: 3,
  },
  {
    name: "Budget App",
    description: "PWA",
    id: 1,
  },
  {
    name: "Zero",
    description: "A kind soul",
    id: 2,
  },
  {
    name: "Walter",
    description: "Friend for life",
    id: 3,
  },
];

export default function Projects() {
  return (
    <div className="container mb-5">
      <Row xs={1} md={2} className="g-4">
        {projects.map((project) => (
          <Col>
            <Card name={project.name} description={project.description} key={project.id}>
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
              <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/coming-soon.jpg"} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
