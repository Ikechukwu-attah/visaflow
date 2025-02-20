import React from "react";
import MainLayout from "../layouts/MainLayout";
import HeroSection from "../components/Hero/hero";

const Home = () => {
  return (
    <MainLayout>
      <div className="md:px-16">
        {" "}
        <HeroSection />
      </div>
    </MainLayout>
  );
};

export default Home;
