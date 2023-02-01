import React from "react";
import "../Header/header.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { About } from "../About/About";
import { Action } from "../Action/Action";
import { GalleryComponent } from "../Gallery/GalleryComponent";
import { Booking } from "../Booking/Booking";
import { Contacts } from "../Contacts/Contacts";
import { Slider } from "./Slider/Slider";

const MainComponent = () => {
  return (
    <>
      <section className="main__container">
        <div className="main__wrap">
          <h1 className="main__title">
            Start Your Day With Our Exclusive Coffee
          </h1>
          <Slider />
        </div>
        <main className="main">
          {/* <p className="main__text"></p>
          <div className="main__logo logo"></div> */}
          <h2 className="main__title-sell">
            book your table <span className="main__title-pay">NOW</span>
          </h2>
        </main>
      </section>
      <About />
      <Action />
      <GalleryComponent />
      <Booking />
      <Contacts />
    </>
  );
};

export default MainComponent;
