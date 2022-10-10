import React, { useState } from "react";
import data from "./ImageHolder";
import "./App.css";
import Buttons from "./Buttons";
export default function Carousel() {
  const [slider, setSlider] = useState(1);
  // console.log(data.length);
  function nextSection() {
    // slider !== data.length ? setSlider(slider + 1) : setSlider(0);
    console.log(slider);
  }
  function preSection() {
    // slider !== data.length ? setSlider(slider + 1) : setSlider(0)
    console.log(slider);
  }
  return (
    <div className="container">
      <div className="containerInner">
        {data.length &&
          data.map((m, index) => {
            const { id, imgSrc, imgText } = m;
            return (
              <div
                className={slider === index + 1 ? "slider.present" : "slider"}
                key={id}
              >
                <img src={imgSrc} alt={imgText} />
              </div>
            );
          })}
      </div>
      <div className="btnContainer">
         
          {/* <Buttons arrowSide ='prev' moveSlide={preSection}/> */}
          <Buttons arrowSide ='next' moveSlide={nextSection}/>
        </div>
    </div>
  );
}
