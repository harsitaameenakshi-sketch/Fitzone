import { useState } from "react";
import MemberModal from "../MemberModal/MemberModal";
import "./Membership.css";
import { FaCheck } from "react-icons/fa";

function Membership() {
    const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedPlan, setSelectedPlan] = useState("");
  return (
    <section className="membership" id="membership">
      <p className="section-tag">MEMBERSHIP</p>
      <h2 className="section-title">Choose Your Perfect Plan</h2>

      <div className="membership-container">

        <div className="membership-card">
          <h3>Basic</h3>
          <h1>₹999<span>/month</span></h1>

          <ul>
            <li><FaCheck /> Gym Access</li>
            <li><FaCheck /> Locker Facility</li>
            <li><FaCheck /> Free Wi-Fi</li>
            <li><FaCheck /> Basic Support</li>
          </ul>

          <button
          onClick={() => {
           setSelectedPlan("Basic");
            setIsModalOpen(true);
           }}
         >
         Join Now
         </button>
        </div>

        <div className="membership-card featured">
              <div className="plan-tag">★ MOST POPULAR</div>
          <h3>Premium</h3>
          <h1>₹1999<span>/month</span></h1>

          <ul>
            <li><FaCheck /> Unlimited Access</li>
            <li><FaCheck /> Personal Trainer</li>
            <li><FaCheck /> Diet Consultation</li>
            <li><FaCheck /> Group Classes</li>
          </ul>

          <button
          onClick={() => {
          setSelectedPlan("Premium");
           setIsModalOpen(true);
          }}
         >
          Join Now
         </button>
        </div>

        <div className="membership-card">
          <h3>Elite</h3>
          <h1>₹2999<span>/month</span></h1>

          <ul>
            <li><FaCheck /> VIP Lounge</li>
            <li><FaCheck /> Sauna Access</li>
            <li><FaCheck /> 24/7 Gym Access</li>
            <li><FaCheck /> Priority Support</li>
          </ul>

          <button
          onClick={() => {
          setSelectedPlan("Elite");
          setIsModalOpen(true);
         }}
         >
           Join Now
         </button>
        </div>

      </div>
      <MemberModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  selectedPlan={selectedPlan}
/>
    </section>
  );
}

export default Membership;