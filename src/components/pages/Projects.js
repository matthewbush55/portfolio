import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const projects = [
  {
    id: 1,
    name: "Offline Budget App",
    description: "Progressive Web App",
    img: "/images/pwa.png",
    // link:
  },
  {
    id: 2,
    name: "Zero",
    description: "A kind soul",
  },
  {
    id: 3,
    name: "Walter",
    description: "Friend for life",
  },
  {
    id: 4,
    name: "Budget App",
    description: "PWA",
  },
  {
    id: 5,
    name: "Zero",
    description: "A kind soul",
  },
  {
    id: 6,
    name: "Walter",
    description: "Friend for life",
  },
];

export default function Projects() {
  return (
    <div className="container p-5 mb-5">
      <Row xs={1} md={2} className="g-4">
        {projects.map((project) => (
          <Col>
            <Card name={project.name} description={project.description} key={project.id}>
              <Card.Header>
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card.Header>
              <Card.Img variant="top" src={process.env.PUBLIC_URL + project.img} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
