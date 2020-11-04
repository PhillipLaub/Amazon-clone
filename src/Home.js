import React from "react";
import "./Home.css";
import Product from "./Product";
import HomeCarousel from "./HomeCarousel";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* Carousel start */}

        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
          alt=""
        /> */}
        <HomeCarousel className="home__image" />
        {/* Carousel End */}

        <div className="home__row home__firstRow">
          <Product
            id="49538094"
            title="
            Instant Pot Duo Plus 9-in-1 Electric Pressure Cooker"
            image="https://images-na.ssl-images-amazon.com/images/I/71KvB9WVwsL._AC_SL1500_.jpg"
            price={79.99}
            rating={4}
          />
          <Product
            id="49538"
            title="Pulaski Home Comfort Mid Century Modern Wood Frame Accent Chair "
            image="https://images-na.ssl-images-amazon.com/images/I/A15DwL7kwML._AC_SL1500_.jpg"
            price={97.29}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="4953822"
            title="Convenience Concepts Savannah Mid Century TV Stand, Black"
            image="https://images-na.ssl-images-amazon.com/images/I/91mBLK-4bGL._AC_SL1500_.jpg"
            price={114.99}
            rating={3}
          />
          <Product
            id="4953809499"
            title="GTRACING Gaming Chair Racing Office Computer Ergonomic Video Game Chair"
            image="https://images-na.ssl-images-amazon.com/images/I/61yL3PCJbAL._AC_SL1000_.jpg"
            price={129.99}
            rating={4}
          />
          <Product
            id="4953221"
            title="My Little Pony Toys Meet the Mane 6 Ponies Collection (Amazon Exclusive)"
            image="https://images-na.ssl-images-amazon.com/images/I/41fpw7tuLNL._AC_.jpg"
            price={15.99}
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            id="495234"
            title="Nintendo Bowser's Castle Super Mario Deluxe Bowser's Castle Playset with 2.5"
            image="https://images-na.ssl-images-amazon.com/images/I/81OQw2hdXbL._AC_SL1500_.jpg"
            price={39.99}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
