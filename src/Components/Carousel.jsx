import {useState} from 'react';
import data from './ImageHolder';
import './App.css';
import Buttons from './Buttons';
export default function Carousel() {
    const [slider, setSlider] = useState(0); 

  return (
    <div className='container'>
       <div className='containerInner'>
       {
            data.length && data.map((m, index)=> {
                const {id, imgSrc, imgText} = m;
                return (
                <div className= {slider === index ? 'slider.active' : 'slider'} 
                key={id}>
                  <img src={imgSrc} alt={imgText} />
                 <Buttons arrowSide ='prev'/>
                 <Buttons arrowSide ='next'/>
                </div>
                )
            })
        }
       </div>
    </div>
  )
}
