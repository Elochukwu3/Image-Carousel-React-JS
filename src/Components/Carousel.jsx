import {useState} from 'react';
import data from './ImageHolder';
import './App.css';
import Buttons from './Buttons';
export default function Carousel() {
    const [slider, setSlider] = useState(1); 
function nextSection() {
  slider !== data.length ? setSlider(slider + 1) : setSlider(0)
  console.log(slider);
};
  return (
    <div className='container'>
       <div className='containerInner'>
       {
            data.length && data.map((m, index)=> {
                const {id, imgSrc, imgText} = m;
                return (
                <div className={slider === index + 1? 'slider.present' : 'slider'} 
                key={id}>
                  <img src={imgSrc} alt={imgText} />
                </div>
                )
            })
        }
         <Buttons arrowSide ='prev'/>
           <Buttons arrowSide ='next' clickFuntion={nextSection}/>
       </div>
    </div>
  )
}
