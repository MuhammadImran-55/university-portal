import {React,useState} from 'react'
import './Testimonials.css';
import shape1 from '../../assets/images/testimonial-shape-1.webp'
import shape2 from '../../assets/images/testimonial-shape-1.svg'
import shape3 from '../../assets/images/testimonial-shape-2.png'
import { ArrowRight,ArrowLeft, Play } from 'lucide-react';
import {testimonialData} from '../../Data'



const Testimonials = () => {

    const [currentElem, setCurrentElem] = useState(0);

console.log(currentElem);

    const leftArrow = ()=>{
         if(currentElem > 0)
         setCurrentElem(currentElem - 1);
        if(currentElem === 0)
          setCurrentElem(testimonialData.length - 1)
    }
    const rightArrow = ()=>{
      if(currentElem < testimonialData.length - 1)
            setCurrentElem(currentElem + 1 );
      if(currentElem === testimonialData.length -1)
        setCurrentElem(0);    
    }






  return (
    <div className='testimonials'>  
        <div className="bg-2"></div>
   
        <img className='t-img' src={shape2} alt="" />
        <img className='t-img' src={shape3} alt="" />
        <div className="video-btn"><Play fill='red' color='red' /></div>
        <div className="slider-container">
        <img className='commas'  src={shape1} alt="" />
            <h1><span style={{color: '#AB0C2F',fontSize:'20px',fontWeight: 'italic'}}>Testimonial</span><br />What Student Says</h1>
        

        <div className="test-slide-container">
        {
          testimonialData.map((curElem,index)=>(
             <div className="slider" key={index} style={{transform:`translateX(-${currentElem * 100}%)`}}>
           <div> <img className='slide-img'   src={curElem.img} alt="" /></div>
            <p>{curElem.p}</p>
             <h2>{curElem.h2} <span >{curElem.span}</span></h2>
           
           </div>
          ))
        }  
        </div>
          
           <div className="arrow-box">
           <div className="right-arrow arrow" onClick={leftArrow}><ArrowLeft/></div>
            <div className="left-arrow arrow" onClick={rightArrow}><ArrowRight/></div>
           </div>
        
        </div>
    </div>
  )
}

export default Testimonials