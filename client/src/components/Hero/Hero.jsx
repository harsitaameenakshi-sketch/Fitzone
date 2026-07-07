import { useState } from "react";
import "./Hero.css";
import heroImage from "../../assets/images/hero.png";
import TrialModal from "../TrialModal/TrialModal";
function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
   <section
  className="hero"
  id="home"
  data-aos="fade-up"
>
      <div className="hero-left">

        <p className="hero-tag">BEST FITNESS CLUB</p>

        <h1>
          NO PAIN <br /> NO GAIN
        </h1>

        <p className="hero-description">
          Build strength, confidence and discipline with world-class trainers and premium fitness programs.
        </p>

        <div className="hero-buttons">
           <button
             className="primary-btn"
            onClick={() => setIsModalOpen(true)}
           >
            Book Free Trial
        </button>

        <button className="secondary-btn">
  Watch Video
        </button>
           
        </div>

        <div className="hero-stats">

          <div className="stat">
            <h2>25+</h2>
            <p>Expert Trainers</p>
          </div>

          <div className="stat">
            <h2>10K+</h2>
            <p>Happy Members</p>
          </div>

          <div className="stat">
            <h2>50+</h2>
            <p>Programs</p>
          </div>

        </div>

      </div>

      <div className="hero-right">
        <img
          src={heroImage}
          alt="Gym Athlete"
          className="hero-image"
        />
      </div>
     <TrialModal
      isOpen={isModalOpen}
       onClose={() => setIsModalOpen(false)}
     />
    </section>
  );
}

export default Hero;