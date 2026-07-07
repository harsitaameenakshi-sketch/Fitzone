import { useState, useEffect } from "react";
import "./MemberModal.css";
import toast from "react-hot-toast";
function MemberModal({ isOpen, onClose, selectedPlan }) {

  const [formData, setFormData] = useState({
    fullName:"",
    email:"",
    phone:"",
    age:"",
    gender:"",
    membership:"",
    emergencyContact:"",
    medicalConditions:"",
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {

    setFormData((prev)=>({
      ...prev,
      membership:selectedPlan,
    }));

  },[selectedPlan]);

  const handleChange=(e)=>{

    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
    });

  };

  const handleSubmit=async(e)=>{

    e.preventDefault();
  setLoading(true);
    try{

      const response=await fetch(`${import.meta.env.VITE_API_URL}/api/member`, {

        method:"POST",

        headers:{
          "Content-Type":"application/json",
        },

        body:JSON.stringify(formData),

      });

      const data=await response.json();
      setLoading(false);
     toast.success(data.message);

      onClose();

    }

    catch(error){
     setLoading(false);
      console.log(error);

      toast.error("Registration Failed");
    }
 finally {

    setLoading(false);

  }
  };

  if(!isOpen) return null;

  return(

<div className="modal-overlay">

<div className="modal">

<button
className="close-btn"
onClick={onClose}
>

✕

</button>

<h2>{selectedPlan} Membership</h2>

<form onSubmit={handleSubmit}>

<input
name="fullName"
placeholder="Full Name"
onChange={handleChange}
required
/>

<input
name="email"
type="email"
placeholder="Email"
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
type="number"
name="age"
min="18"
max="70"
required
onChange={handleChange}
/>

<select
name="gender"
onChange={handleChange}
required
>

<option value="">Gender</option>

<option>Male</option>

<option>Female</option>

<option>Other</option>

</select>

<input
name="emergencyContact"
placeholder="Emergency Contact"
onChange={handleChange}
required
/>

<textarea

name="medicalConditions"

placeholder="Medical Conditions"

onChange={handleChange}

/>

<button
type="submit"
className="book-btn"
disabled={loading}
>

{loading ? "Registering..." : "Register"}

</button>

</form>

</div>

</div>

  );

}

export default MemberModal;