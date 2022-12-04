import React from "react";

// CSS
import "./EntrepreneurCard.style.scss";

function EntrepreneurCard({ comment, img, name, designation }) {
  return (
    <div className="entrepreneur-card">
      <div className="img-container">
        <img src={require(`../../../assets/images/${img}`)} alt="img" />
      </div>
      <div className="content-container">
        <p className="description">{comment}</p>
        <div className="box">
          <span className="name">{name}</span>
          <span className="designation">{designation}</span>
        </div>
      </div>
    </div>
  );
}

export default EntrepreneurCard;
