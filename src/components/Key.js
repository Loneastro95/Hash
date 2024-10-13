import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./key.css";
import keyImg from "../assests/key.png";

const Key = () => {
  return (
    <div className="keyMain">
      <Container>
        <h1 className="keyHeader">Key Pillars</h1>
        <h5 className="keySub">
          The key pillars of Tshimologong’s ecosystem in achieving its purpose
          are:
        </h5>
        <div className="row card-container">
          <div className="col-md-4 col-sm-6 card-inner">
            <Card className="card mt-4">
              <Card.Img variant="top" src={keyImg} />
              <Card.Body className="cardBody">
                <Card.Title>Digital Skills Development</Card.Title>
                <Card.Text className="cardText">
                  Programmes are focussed on increasing talent in digital
                  ventures and growing tech teams.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 col-sm-6 card-inner">
            <Card className="card mt-4">
              <Card.Img variant="top" src={keyImg} />
              <Card.Body className="cardBody">
                <Card.Title>Incubation & Acceleration</Card.Title>
                <Card.Text className="cardText">
                  Initiatives are designed to increase Digital Startups,
                  supporting their businesses at every stage of development.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 col-sm-6 card-inner">
            <Card className="card mt-4">
              <Card.Img variant="top" src={keyImg} />
              <Card.Body className="cardBody">
                <Card.Title>Networks & Market Access</Card.Title>
                <Card.Text className="cardText">
                  Through various programmes we enable entrepreneurs to build
                  effective networks, providing access to funding and markets.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <h5 className="bottom-text">
          Our Vision is that Tshimologong will become a catalyst for the development of world leading African digital entrepreneurs.
        </h5>
        <h5 className="bottom-text">
          We cement this vision through our approach to digital innovation.
        </h5>
      </Container>
    </div>
  );
};

export default Key;
