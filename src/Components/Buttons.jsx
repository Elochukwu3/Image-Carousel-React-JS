


export default function Butttons({arrowSide, moveSlide}) { 
    const arrowPrev = 'fa-solid fa-arrow-left';
    const arrows = 'fa-solid fa-arrow-right';
    return (
    <button className={arrowSide === 'next' ? 'nextSlide' : 'prevSlide'} onClick={moveSlide}>
        <i className={arrowSide === 'next' ? arrows : arrowPrev}></i>
    </button>
  )
}
