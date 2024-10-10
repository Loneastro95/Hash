import React from "react";
import Container from "react-bootstrap/Container";
import "./about.css";
import business from "../assests/business.png";

const About = () => {
  return (
    <Container>
      <div className="aboutContainer">
        <img src={business} alt="business people talking" />
        <div className="about-content">
          <h1 className="mb-5">About Us</h1>
          <p className="about-text">
            The University of the Witwatersrand’s B-BBBEE Level 1 Entity,
            Tshimologong Digital Innovation Precinct, is a hub where the
            incubation of startups and SMEs takes place and aims to create
            world-leading African digital entrepreneurs. We provide startups and
            entrepreneurs with the tools and support they need to grow and scale
            their businesses through our industry-leading Enterprise Development
            Model that is focused on developing skills for the digital economy
            while unearthing digital start-ups and talent in Africa. We would
            like to align with your strategy by creating an end-to-end
            customised Enterprise Supplier Development (ESD) programme that
            incorporates your company values and goals.
          </p>
          <button className="contactBtn">Contact Us</button>
        </div>
      </div>
    </Container>
  );
};

export default About;
