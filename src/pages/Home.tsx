import MainLayout from "../layouts/MainLayout";
import HeroSection from "../components/Hero/hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import PricingPlans from "../components/PricePlan/PricePlaning";
import FAQ from "../components/FAQ/FAQ";
import ContactUs from "../components/ContactUs/ContactUs";
import Testimonials from "../components/Testimonia/Testimonia";
import CallToAction from "../components/CallToACtion/CallToAction";

const Home = () => {
  return (
    <MainLayout>
      <div className="">
        <HeroSection />

        <WhyChooseUs />

        <HowItWorks />

        <Testimonials />

        <PricingPlans />

        <FAQ />

        <ContactUs />

        <CallToAction />
      </div>
    </MainLayout>
  );
};

export default Home;
