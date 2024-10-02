import { useState } from "react";
import arrowLeft from "../../assets/arrow-left.png";
import arrowRight from "../../assets/arrow-right.png";
import "./carousel.scss";

export const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  if (pictures.length === 0) return null;

  return (
    <div className="carouselWrapper">
      <div className="carouselContainer">
        <img
          src={pictures[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="imgCarousel"
        />
        {pictures.length > 1 && (
          <div className="imgIndexation between">
            <img
              src={arrowLeft}
              alt="Précédent"
              className="slide"
              onClick={prevSlide}
            />
            <span className="imgIndex">{`${currentIndex + 1} / ${pictures.length}`}</span>
            <img
              src={arrowRight}
              alt="Suivant"
              className="slide"
              onClick={nextSlide}
            />
          </div>
        )}
      </div>
    </div>
  );
};

