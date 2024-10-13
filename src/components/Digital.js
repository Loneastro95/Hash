import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faGear, faFileAlt, faDesktop } from '@fortawesome/free-solid-svg-icons';
import "./digital.css";

const Digital = () => {
  return (
    <Container className="digital-container">
      <h1 className="digital-header">
        We define digital innovation as the intersection between:
      </h1>
      <div className="circle-container">
        <div className="venn-container">
          <div className="outer venn" id="outer1">
          <FontAwesomeIcon className="digital-icon me-5" icon={faFileAlt} />
          <h4 className="digital-text me-5 mb-4">Content</h4>
          </div>
          <div className="label-left">
            <ul>
                <li className="digital-items">2D animation</li>
                <li className="digital-items">Gaming</li>
                <li className="digital-items">VR/ AR/ XR</li>
            </ul>
          </div>
        </div>
        <div className="venn-container">
          <div className="outer venn" id="outer2">
          <FontAwesomeIcon className="digital-icon hard" icon={faGear} />
          <h4 className="digital-text hard mb-4">Hardware</h4>
          </div>
          <div className="label-right">
          <ul>
                <li className="digital-items">2D animation</li>
                <li className="digital-items">Gaming</li>
                <li className="digital-items">VR/ AR/ XR</li>
            </ul>
          </div>
        </div>
        <div className="venn-container">
          <div className="outer venn" id="outer3">
          <FontAwesomeIcon className="digital-icon mt-5" icon={faDesktop} />
          <h4 className="digital-text ">Software</h4>
          </div>
          <div className="label-bottom">
          <ul>
                <li className="digital-items">Mobile App Development</li>
                <li className="digital-items">Web Development</li>
                <li className="digital-items">Testing</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Digital;
