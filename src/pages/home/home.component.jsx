import React from "react";

// COMPONENTS
import Hero from "../../components/sections/hero/hero.component";
import WhatWeDo from "../../components/sections/whatWeDo/whatWeDo.component";
import PeopleBenefit from "../../components/sections/peopleBenefit/peopleBenefit.component";
import WhatEntrepreneurs from "../../components/sections/whatEnterpreneurs/whatEntrepreneurs.component";
import OurBlog from "../../components/sections/ourBlog/ourBlog.component";
import DeliveryAppaApp from "../../components/sections/deliveryAppaApp/deliveryAppaApp.component";
import Team from "../../components/sections/team/team.component";

// STYLE
import "./home.style.scss";

function Home(props) {
  return (
    <div className="home">
      <Hero />
      <a id="about"></a>
      <WhatWeDo />
      <PeopleBenefit />
      <WhatEntrepreneurs />
      <a id="blog"></a>
      <OurBlog />
      <DeliveryAppaApp />
      <a id="team"></a>
      <Team />
      <a id="contact"></a>
    </div>
  );
}

export default Home;
