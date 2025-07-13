import {React, useState} from 'react'
import './Programs.css'
import img from '../../assets/images/home-2.png'
import Tag from '../../assets/images/program-tag.svg'
import { programCard } from '../../Data'



const Programs = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  
    const  prev = ()=>{
      if(currentIndex > 0)
        setCurrentIndex( currentIndex - 1);
      
    }
    const  next = ()=>{
      if(currentIndex < programCard.length - 3)
      setCurrentIndex(currentIndex + 1);
      
    }

  return (
    <div className='programs-sec'>
        <div className="programs-upper">
            <h1>Academic <span style={{color:'black'}}> Programs</span></h1>
            <p>Focusing on high education with the best quality.</p>
        </div>
          <button onClick={prev}>pre</button>
          <button onClick={next}>next</button>
         <div className='slide-wraper'>
        <div className="program-center" style={{transform: `translateX(-${currentIndex * 33}%)`}}>
            {
               programCard.map((curElem,index)=>(
                <div className="card" key={index} >
                <div className="img-box">
               
                <img src={curElem.image} alt="" />
                </div>
                <div className="text-sec">
                <h1>{curElem.title}</h1>
                <p>{curElem.p}</p>
                <div className="icon">
                    <img src={curElem.icon.png} alt="" />
                    <span style={{color:'black',fontWeight:'400',fontSize:'18px'
                    }}>{curElem.icon.txt}</span>
                </div>
                <button  className='btn'>{curElem.btn}</button>
                </div>
               </div> 
               ))

            }

        </div>
        </div>
       
        <div className="program-lower">
            <h1>Explore the most appropriate program <a href="" style={{borderBottom: '1px solid black' ,color:'#AB0C2F'}}>​​View all Programs </a></h1>
        </div>
    </div>
  )
}

export default Programs