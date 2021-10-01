import React from "react";
import "./projects.css";
import { Row, Col, Card } from "react-bootstrap";

const projects = [
  {
    id: 1,
    name: "Venu - Event Finder",
    description: "Javascript App",
    img: "/images/venu.jpeg",
    link: "https://matthewbush55.github.io/venu/",
    github: "https://github.com/matthewbush55/venu",
  },
  {
    id: 2,
    name: "Offline Budget",
    description: "Progressive Web App",
    img: "/images/budget.png",
    link: "https://budget-tracker-app-mrb.herokuapp.com/",
    github: "https://github.com/matthewbush55/budget-tracker",
  },
  {
    id: 3,
    name: "Fitness Tracker",
    description: "MongoDB-based App",
    img: "/images/fitness.jpeg",
    link: "https://fitness-tracker-mrb.herokuapp.com/",
    github: "https://github.com/matthewbush55/fitness-tracker",
  },
  {
    id: 4,
    name: "Team Profile Generator",
    description: "CLI-based app for managing team member data",
    img: "/images/team.jpeg",
    link: "https://github.com/matthewbush55/team-profile-generator",
    github: "https://github.com/matthewbush55/team-profile-generator",
  },
  {
    id: 5,
    name: "Weather App",
    description: "Search weather data using a weather API",
    img: "/images/weather.png",
    link: "https://matthewbush55.github.io/weather-app/",
    github: "https://github.com/matthewbush55/weather-app",
  },
  {
    id: 6,
    name: "Day Planner",
    description: "Track your day with an online planner",
    img: "/images/planner.jpeg",
    link: "https://matthewbush55.github.io/day-planner/",
    github: "https://github.com/matthewbush55/day-planner",
  },
];

export default function Projects() {
  return (
    <div className="container p-5 mb-5">
      <Row xs={1} md={2} className="g-4">
        {projects.map((project) => (
          <Col>
            <Card name={project.name} key={project.id}>
              <Card.Header>
                <Card.Body>
                  <Card.Title>
                    <a href={project.link}>{project.name}</a>
                  </Card.Title>
                  <Card.Text>
                    <a href={project.github}>View on GitHub</a>
                  </Card.Text>
                </Card.Body>
              </Card.Header>
              <Card.Img className="img" variant="top" src={process.env.PUBLIC_URL + project.img} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
