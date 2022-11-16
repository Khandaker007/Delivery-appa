import React from "react";

// COMPONENTS
import TeamCard from "../../shared/TeamCard/TeamCard.component";

import "./team.style.scss";

function Team(props) {
  return (
    <div className="team">
      <div className="team__heading">
        <h1>The Dream Team</h1>
      </div>
      <div className="team__member">
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
}

export default Team;
