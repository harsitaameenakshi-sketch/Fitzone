import "./Gallery.css";

import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";
import gallery5 from "../../assets/images/gallery5.jpg";
import gallery6 from "../../assets/images/gallery6.jpg";

import { FaSearchPlus } from "react-icons/fa";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];

function Gallery() {
  return (
    <section className="gallery" id="gallery">

      <p className="section-tag">OUR GALLERY</p>

      <h2 className="section-title">
        Train. Sweat. Transform.
      </h2>

      <div className="gallery-grid">

        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt="Gym" />

            <div className="gallery-overlay">
              <FaSearchPlus />
              <p>View Image</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Gallery;