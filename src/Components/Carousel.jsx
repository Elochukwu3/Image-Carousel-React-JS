import {useState} from 'react';
import data from './ImageHolder';
import './App.css';
import Buttons from './Buttons';
export default function Carousel() {
    const [slider, setSlider] = useState(0); 
const nextSection = () =>{
  setSlider(slider + 1)
  console.log(slider);
}
  return (
    <div className='container'>
       <div className='containerInner'>
       {
            data.length && data.map((m, index)=> {
                const {id, imgSrc, imgText} = m;
                return (
                <div className= {slider === index ? 'slider.present' : 'slider'} 
                key={id}>
                  <img src={imgSrc} alt={imgText} />
                </div>
                )
            })
        }
         <Buttons arrowSide ='prev' clickFuntion={nextSection}/>
           <Buttons arrowSide ='next'/>
       </div>
    </div>
  )
}
