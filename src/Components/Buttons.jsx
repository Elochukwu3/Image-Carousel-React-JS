const ARL = "fa-solid fa-arrow-left";
const ARR = "fa-solid fa-arrow-right";
export default function Butttons({ arrowSide, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={arrowSide === "next" ? "nextSlide" : "prevSlide"}
    >
      <i className={arrowSide === "next" ? ARR : ARL}></i>
    </button>
  );
}
