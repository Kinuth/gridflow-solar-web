import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import LeadershipSection from "./components/LeadershipSection";
import ProductsSection from "./components/ProductsSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import ImpactSection from "./components/ImpactSection";
import EventsSection from "./components/EventsSection";
import PartnersSection from "./components/PartnersSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <AboutSection />
      <ProblemSection />
      <SolutionSection />
      <ImpactSection />
      <ProductsSection />
      <EventsSection />
      <PartnersSection />
      <TestimonialsSection />
      <LeadershipSection />
      <Footer />
    </Fragment>
  );
};

export default App;
