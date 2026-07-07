import "./Programs.css";
import {
  FaDumbbell,
  FaRunning,
  FaHeartbeat,
  FaFire,
  FaUserAlt,
} from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";

function Programs() {
  return (
    <section className="programs" id="programs">

      <p className="program-tag">OUR PROGRAMS</p>

      <h2>Choose Your Fitness Goal</h2>

      <div className="program-grid">

        <div className="program-card">
          <FaDumbbell className="program-icon" />
          <h3>Strength Training</h3>
          <p>Build muscle and increase power with expert coaching.</p>
          <span>Learn More →</span>
        </div>

        <div className="program-card">
          <FaRunning className="program-icon" />
          <h3>Cardio</h3>
          <p>Improve endurance and burn calories efficiently.</p>
          <span>Learn More →</span>
        </div>

        <div className="program-card">
          <GiMeditation className="program-icon" />
          <h3>Yoga</h3>
          <p>Enhance flexibility, balance and inner peace.</p>
          <span>Learn More →</span>
        </div>

        <div className="program-card">
          <FaFire className="program-icon" />
          <h3>HIIT</h3>
          <p>High-intensity workouts designed for maximum fat loss.</p>
          <span>Learn More →</span>
        </div>

        <div className="program-card">
          <FaHeartbeat className="program-icon" />
          <h3>CrossFit</h3>
          <p>Challenge yourself with functional fitness training.</p>
          <span>Learn More →</span>
        </div>

        <div className="program-card">
          <FaUserAlt className="program-icon" />
          <h3>Personal Training</h3>
          <p>One-on-one coaching tailored to your goals.</p>
          <span>Learn More →</span>
        </div>

      </div>

    </section>
  );
}

export default Programs;