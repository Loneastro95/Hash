import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Young from '../assests/young.png'
import "./home.css"

const Home = () => {
  return (
    <div className="explore-container ">
    <Carousel className="carousel-container">
      <Carousel.Item interval={2500}>
        <img className="d-block w-100" src={Young} alt="Image One" />
        <Carousel.Caption className="carousel-caption">
          <h3 className="explore-header">Market Access</h3>
          <p className="explore-text">
            Welcome to Kimberley, the heart of the Northern Cape! Explore the
            famous Big Hole, discover diamond mining stories, and stroll
            through historic Victorian streets. Enjoy a unique blend of
            adventure and history.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="d-block w-100" src={Young} alt="Image Two" />
        <Carousel.Caption className="carousel-caption">
          <h3 className="explore-header">Skill Development</h3>
          <p className="explore-text">
            Discover diamond mining history at the Kimberley Mine Museum and
            enjoy local art galleries. Savor regional cuisine and warm
            hospitality. Kimberley blends history, culture, and adventure.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="d-block w-100" src={Young} alt="Image Two" />
        <Carousel.Caption className="carousel-caption">
          <h3 className="explore-header">Enterprise Development</h3>
          <p className="explore-text">
            Savor local cuisine, dive into the vibrant art scene, and feel the
            warmth of the community. Whether you're a history buff, nature
            lover, or adventurer, Kimberley promises an unforgettable journey.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  )
}

export default Home