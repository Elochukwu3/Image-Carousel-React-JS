import {useState} from 'react';
import data from './ImageHolder';

export default function Carousel() {
    const [slider, setSlider] = useState(0); 
  return (
    <div>
        {
            data.length && data.map(m=>{
                const {id, imgSrc, imgText} = m
                return (
                <div><img src={imgSrc} alt={imgText} /> </div>
                )
            })
        }
    </div>
  )
}
