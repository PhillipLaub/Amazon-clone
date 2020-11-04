import React from "react";
import Carousel from "react-bootstrap/Carousel";

function HomeCarousel() {
  return (
    <div>
      {/* Carousel start */}

      {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
          alt=""
        /> */}
      <Carousel controls={false} className="home__image">
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MzllYzFlMWMt/MzllYzFlMWMt-ZDIxMDFkOTAt-w1500._CB418095224_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://images-na.ssl-images-amazon.com/images/G/01/img20/events/Q4/Holiday/dash/trafficdrivers/Q4_2020_HolidayDash_TrafficDrivers_Desktop_Hero_V2_Photo_1500x600._CB402709157_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      {/* Carousel End */}
    </div>
  );
}

export default HomeCarousel;
