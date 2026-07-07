import "./Trainers.css";

import trainer1 from "../../assets/images/trainer1.jpg";
import trainer2 from "../../assets/images/trainer2.jpg";
import trainer3 from "../../assets/images/trainer3.jpg";

import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

function Trainers() {
  return (
    <section className="trainers" id="trainers">

      <h4>OUR TRAINERS</h4>

      <h2>Meet Our Expert Coaches</h2>

      <div className="trainer-container">

        <div className="trainer-card">

          <img src={trainer1} alt="" />

          <h3>John Carter</h3>

          <p>Strength Coach</p>

          <div className="social-icons">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
          </div>

        </div>

        <div className="trainer-card">

          <img src={trainer2} alt="" />

          <h3>Sophia Lee</h3>

          <p>Yoga Instructor</p>

          <div className="social-icons">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
          </div>

        </div>

        <div className="trainer-card">

          <img src={trainer3} alt="" />

          <h3>Michael Smith</h3>

          <p>Personal Trainer</p>

          <div className="social-icons">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
          </div>

        </div>
       
</div>

      

    </section>
  );
}

export default Trainers;