import {useState} from 'react';
import data from './ImageHolder';
import './App.css';
export default function Carousel() {
    const [slider, setSlider] = useState(0); 
  return (
    <div className='container'>
       <div className='containerInner'>
       {
            data.length && data.map(m=>{
                const {id, imgSrc, imgText} = m
                return (
                <div className='slider'><img src={imgSrc} alt={imgText} /> </div>
                )
            })
        }
       </div>
    </div>
  )
}
