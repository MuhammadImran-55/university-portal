import React from 'react'
import './About.css'
import aboutImg from '../../assets/images/about-thumb-1.png'
import aboutImg2 from '../../assets/images/about-thumb-2.png'
import aboutImg3 from '../../assets/images/about-icon-1.svg'
import aboutImg4 from '../../assets/images/about-icon-2.svg'
import aboutImg5 from '../../assets/images/about-shape-1.png'
import aboutImg6 from '../../assets/images/about-shape-2.png'
import { CloudMoonRain, MoveRight } from 'lucide-react'
import Counter from '../counter/Counter'



const About = () => {
  return (
    <div className='about-container'>
        <div className="about-img-sec" style={{position: 'relative'}}>
            <img  src={aboutImg} alt="" />
            <img src={aboutImg2} alt="" />
            <img src={aboutImg5} alt="" />
            <img src={aboutImg6} alt="" />
            <Counter/>
        </div>
        <div className="about-text-sec">
            <div className="text-top">
            <h4>ABOUT OUR UNIVERSITY</h4>
            <h2>A few words <br /> about the <br /><span> University</span></h2>
            <p>Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational.</p>
            </div>
            <div className="text-bottom">

                <div className="more">
                <div className="icon-box">
                    <img src={aboutImg3} alt="" />
                </div>
                <div className="icon-text">
                <h2>Building Trust</h2>
                 <p>We are committed to <br /> building trust</p>
                 </div>
                </div>
                <div className="more">
                <div className="icon-box">
                    <img src={aboutImg4} alt="" />
                </div>
                <div className="icon-text">
                <h2>Trusted by Students</h2>
                 <p>Most trusted & recommended <br /> by students</p>
                 </div>
                </div>
                <button>Book an Appointment <MoveRight className='moveRight'/></button>
            </div>
        </div>
        
    </div>
  )
}

export default About