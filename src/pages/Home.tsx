import React from "react";
import MainLayout from "../layouts/MainLayout";
import HeroSection from "../components/Hero/hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <MainLayout>
      <div className="">
        <HeroSection />
        <HowItWorks />
        <WhyChooseUs />
      </div>
    </MainLayout>
  );
};

export default Home;
