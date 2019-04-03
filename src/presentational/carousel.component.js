import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "./carousel.css";
import { Link } from "react-router-dom";

const DemoCarousel = props => {
  return (
    <Carousel
      interval={2000}
      nextIcon={
        <span
          aria-hidden="true"
          className="carousel-control-next-icon carouselIconImg"
        />
      }
      prevIcon={
        <span
          aria-hidden="true"
          className="carousel-control-prev-icon carouselIconImg"
        />
      }
    >
      {props.lastItems.map(item => {
        return (
          <Carousel.Item key={item.id}>
            <Link className="link" to={"/product/" + item.id}>
              <img
                className="d-block w-100 carouselImage"
                src={process.env.PUBLIC_URL + `${item.picture}`}
                alt="First slide 1"
              />
              <Carousel.Caption>
                <p className="carouselProduct">{item.name}</p>
                <p className="carouselProduct">
                  {`$${parseFloat(item.price).toFixed(2)}`}
                </p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default DemoCarousel;
