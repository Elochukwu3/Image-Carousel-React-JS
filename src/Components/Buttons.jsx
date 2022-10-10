import React from 'react'

export default function 
({arrowSide, clickFuntion}) {
    const arrowPrev = 'fa-solid fa-arrow-left';
    const arrows = 'fa-solid fa-arrow-right';
    return (
    <button className={arrowSide === 'next' ? 'nextSlide' : 'prevSlide'} onClick={clickFuntion}>
        <i className={arrowSide === 'next' ? arrows : arrowPrev}></i>
    </button>
  )
}
