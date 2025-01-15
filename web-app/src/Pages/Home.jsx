import React from "react";
import Hero from "../Components/Hero";
import CompaniesTrust from "../Components/CompaniesTrust";
import Campaign from "../Components/Campaign";
import InspirationCards from "../Components/InspirationCards";
import InfluencerDiscovery from "../Components/InfluencerDiscovery";
import Reviews from "../Components/Reviews";
import Ratings from "../Components/Ratings";
import Support from "../Components/Support";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <CompaniesTrust />
      <Campaign />
      <InspirationCards />
      <InfluencerDiscovery />
      <Reviews />
      <Ratings />
      <Support />
      <Footer />
    </div>
  );
};

export default Home;
