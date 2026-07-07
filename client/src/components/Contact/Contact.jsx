import { useState } from "react";
import "./Contact.css";
import toast from "react-hot-toast";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Contact() {
    const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const [loading, setLoading] = useState(false);
const handleChange = (e) => {
   
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = async () => {
     setLoading(true);
const [loading, setLoading] = useState(false);
  try {
    const response = await fetch(
  `${import.meta.env.VITE_API_URL}/api/contact`,
  {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

  toast.success(data.message);
  setLoading(false);
    setFormData({
  name: "",
  email: "",
  subject: "",
  message: "",
});

    console.log(data);

  } catch (error) {
    setLoading(false);
    console.error(error);
      toast.error("Registration Failed");

  }
   finally {

    setLoading(false);

  }
};
  return (
    <section className="contact" id="contact">

      <p className="section-tag">CONTACT US</p>

      <h2 className="section-title">
        Let's Start Your Fitness Journey
      </h2>

      <div className="contact-container">

       <form
  className="contact-form"
  onSubmit={(e) => {
    e.preventDefault();
    handleSubmit();
  }}
>

          <input
           type="text"
           name="name"
           placeholder="Your Name"
           value={formData.name}
           onChange={handleChange}
          />

          <input
           type="email"
           name="email"
           placeholder="Email Address"
           value={formData.email}
           onChange={handleChange}
           />
          <input
           type="text"
           name="subject"
           placeholder="Subject"
           value={formData.subject}
           onChange={handleChange}
           />
          <textarea
          rows="6"
          name="message"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
           />

         <button
         type="submit"
          className="book-btn"
         disabled={loading}
         >

        {loading ? "Booking..." : "Book Trial"}

         </button>

        </form>

        <div className="contact-info">

          <div className="info-box">
            <FaMapMarkerAlt />
            <div>
              <h3>Address</h3>
              <p>123 Fitness Street, Bengaluru, India</p>
            </div>
          </div>

          <div className="info-box">
            <FaPhoneAlt />
            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="info-box">
            <FaEnvelope />
            <div>
              <h3>Email</h3>
              <p>info@fitzone.com</p>
            </div>
          </div>

          <div className="info-box">
            <FaClock />
            <div>
              <h3>Working Hours</h3>
              <p>Mon - Sat : 6 AM - 10 PM</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;