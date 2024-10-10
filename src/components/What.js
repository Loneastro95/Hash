import React from "react";
import Container from "react-bootstrap/Container";
import "./what.css";
import System from "../assests/system.png";
const What = () => {
  return (
    <Container>
      <div className="whatContainer">
        <div className="what-content">
          <h1 className="mb-1">What we do</h1>
          <h5 className="mb-4">
            Working to boost Digital and Entrepreneurship Skills in South Africa
          </h5>
          <p className="what-text">
            The Tshimologong Precinct is a digital innovation ecosystem in
            Braamfontein, Johannesburg, that propels entrepreneurship and grows
            the skills pipeline for the digital economy through collaboration
            with academia, corporates, government and entrepreneurs.
          </p>
          <p className="what-text">
            We provide skills and on-the-job training for unemployed youth while
            accelerating the growth of digital enterprises at every stage of
            their business and create a pathway for students and entrepreneurs
            to showcase their work publicly and access commercial opportunities.
          </p>
        </div>
        <img src={System} alt="lady showing the man her work" />
      </div>
    </Container>
  );
};

export default What;
