import React from 'react'

export default function 
({arrowSide}) {
    const arrowPrev = 'fa-solid fa-arrow-left';
    const arrows = 'fa-solid fa-arrow-right';
    return (
    <button>
        <i className={arrowSide === 'next' ? arrows : arrowPrev}></i>
    </button>
  )
}
