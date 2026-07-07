import { useState } from "react";
import "./TrialModal.css";
import toast from "react-hot-toast";
function TrialModal({ isOpen, onClose }) {
const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/trial`, {
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
        name:"",
        email:"",
        phone:"",
        date:"",
        time:"",
      });

      onClose();

    } catch (error) {
     setLoading(false);
      console.error(error);

     toast.error("Booking Failed");

    }
    finally {

    setLoading(false);

  }
  };

  if (!isOpen) return null;

  return (

    <div className="modal-overlay">

      <div className="modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <h2>Book Free Trial</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

         <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          pattern="[0-9]{10}"
            maxLength="10"
           required

          />

         <input
         type="date"
         name="date"
         min={new Date().toISOString().split("T")[0]}
         value={formData.date}
          onChange={handleChange}
         required
         />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

         <button
           type="submit"
            className="book-btn"
            disabled={loading}
            >

           {loading ? "Booking..." : "Book Trial"}

         </button>
        </form>

      </div>

    </div>

  );
}

export default TrialModal;