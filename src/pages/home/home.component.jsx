import React, { useEffect } from "react";

import AOS from "aos";

// COMPONENTS
import Hero from "../../components/sections/hero/hero.component";
import WhatWeDo from "../../components/sections/whatWeDo/whatWeDo.component";
import PeopleBenefit from "../../components/sections/peopleBenefit/peopleBenefit.component";
import WhatEntrepreneurs from "../../components/sections/whatEnterpreneurs/whatEntrepreneurs.component";
import OurBlog from "../../components/sections/ourBlog/ourBlog.component";
import DeliveryAppaApp from "../../components/sections/deliveryAppaApp/deliveryAppaApp.component";
import Team from "../../components/sections/team/team.component";

import "aos/dist/aos.css";

function Home(props) {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

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
