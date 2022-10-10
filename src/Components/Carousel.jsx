import React, { useState } from "react";
import data from "./ImageHolder";
import "./App.css";
import Buttons from "./Buttons";
export default function Carousel() {
  const [slider, setSlider] = useState(0);
  // console.log(data.length);
  function nextSection() {
    slider === data.length - 1 ? setSlider(0) :  setSlider(slider + 1); 
    // console.log(slider);
  }
  function preSection() {
    slider === 0 ? setSlider(data.length - 1) : setSlider(slider - 1)
  }
  return (
    <div className="container">
      <div className="containerInner">
        {data.length &&
          data.map((m, index) => {
            const { id, imgSrc, imgText } = m;
            return (
              <div
                className={slider === index ? "slider.present" : "slider"}
                key={id}
              >
                <img src={imgSrc} alt={imgText} />
              </div>
            );
          })}
      </div>
      <div className="btnContainer">
         
          <Buttons arrowSide ='prev' moveSlide={preSection}/>
          <Buttons arrowSide ='next' moveSlide={nextSection}/>
        </div>
    </div>
  );
}
