
const arrowPrev = 'fa-solid fa-arrow-left';
    const arrows = 'fa-solid fa-arrow-right';

export default function ({arrowSide, clickFuntion}) { 
    return (
    <button className={arrowSide === 'next' ? 'nextSlide' : 'prevSlide'} onClick={clickFuntion}>
        <i className={arrowSide === 'next' ? arrows : arrowPrev}></i>
    </button>
  )
}
