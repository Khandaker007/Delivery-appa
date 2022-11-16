import React from "react";

// IMAGES
import memberImage from "../../../assets/images/member.png";

// CSS
import "./TeamCard.style.scss";

function TeamCard(props) {
  return (
    <div className="team-card">
      <img src={memberImage} alt="member" />
      <div className="mask">
        <p className="name">Name of Team Member</p>
        <p className="designation">Designation</p>
      </div>
    </div>
  );
}

export default TeamCard;
