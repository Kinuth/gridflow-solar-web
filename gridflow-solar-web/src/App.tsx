import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import ImpactSection from "./components/ImpactSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ImpactSection />
      <Footer />
    </Fragment>
  );
};

export default App;
