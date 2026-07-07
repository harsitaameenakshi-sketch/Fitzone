import "./About.css";
import aboutImage from "../../assets/images/about.jpg";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img src={aboutImage} alt="Gym" />
      </div>

      <div className="about-content">

        <span>ABOUT US</span>

        <h2>
          Transform Your Body,
          <br />
          Transform Your Life
        </h2>

        <p>
          At FitZone, we believe fitness is more than lifting weights.
          Our certified trainers, modern equipment and personalized
          workout plans help you achieve your goals faster.
        </p>

        <div className="about-features">

          <div>✔ Certified Trainers</div>

          <div>✔ Modern Equipment</div>

          <div>✔ Personalized Programs</div>

          <div>✔ Nutrition Guidance</div>

        </div>

        <button className="primary-btn">
          Learn More
        </button>

      </div>

    </section>
  );
}

export default About;