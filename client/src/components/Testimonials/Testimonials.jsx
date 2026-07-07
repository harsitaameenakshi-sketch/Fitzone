import "./Testimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaStar } from "react-icons/fa";

import t1 from "../../assets/images/testimonial1.jpg";
import t2 from "../../assets/images/testimonial2.jpg";
import t3 from "../../assets/images/testimonial3.jpg";

const testimonials = [
  {
    image: t1,
    name: "Sarah Johnson",
    role: "Premium Member",
    review:
      "FitZone completely transformed my fitness journey. The trainers are knowledgeable and incredibly motivating.",
  },
  {
    image: t2,
    name: "David Miller",
    role: "Elite Member",
    review:
      "The facilities are world-class and the workout plans are personalized. I achieved results faster than expected.",
  },
  {
    image: t3,
    name: "Emily Davis",
    role: "Basic Member",
    review:
      "Amazing atmosphere and supportive trainers. Every workout keeps me motivated to come back.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">

      <p className="section-tag">TESTIMONIALS</p>

      <h2 className="section-title">
        What Our Members Say
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">

              <img src={item.image} alt={item.name} />

              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="review">
                "{item.review}"
              </p>

              <h3>{item.name}</h3>

              <span>{item.role}</span>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

export default Testimonials;