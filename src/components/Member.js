import React from "react";
import Container from "react-bootstrap/Container";
import "./member.css";
import business from "../assests/business.png";

const Member = () => {
  return (

      <div className="memberContainer">
        <h1 className="memberHeader">Tshimologong Community & Co-Working Space</h1>
        <div className="memberBtnContainer">
            <button className="memberBtn">Apply for Membership</button>
            <button className="memberBtn">Read More</button>
        </div>
      </div>

  );
};

export default Member;