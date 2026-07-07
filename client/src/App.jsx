import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Programs from "./components/Programs/Programs";
import Trainers from "./components/Trainers/Trainers";
import Membership from "./components/Membership/Membership";
import Gallery from "./components/Gallery/Gallery";
import Testimonials from "./components/Testimonials/Testimonials"
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
     AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Trainers />
      <Membership />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}


export default App;