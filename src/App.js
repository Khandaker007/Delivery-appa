import "./App.scss";

// COMPONENTS
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Hero from "./components/sections/hero/hero.component";
import PeopleBenefit from "./components/sections/peopleBenefit/peopleBenefit.component";
import WhatEntrepreneurs from "./components/sections/whatEnterpreneurs/whatEntrepreneurs.component";
import OurBlog from "./components/sections/ourBlog/ourBlog.component";
import DeliveryAppaApp from "./components/sections/deliveryAppaApp/deliveryAppaApp.component";
import Team from "./components/sections/team/team.component";

function App() {
  return (
    <div className="delivery-appa">
      <Header />
      <Hero />
      <PeopleBenefit />
      <WhatEntrepreneurs />
      <OurBlog />
      <DeliveryAppaApp />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
