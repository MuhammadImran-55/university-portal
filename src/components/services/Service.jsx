import React from 'react'
import './Service.css'
import degree from '../../assets/images/degree.png'
import service1 from '../../assets/images/service-icon-1.svg'
import {serviceData} from '../../Data'
import { ArrowRight } from 'lucide-react'

const Service = () => {
  return (
    <div className='service-sec'>
        <div className="service-card-box">
          {
            serviceData.map((item, index) => {
              return (
                <div className="service-card" key={index}>
                  <div className="upper-sec">
                    <img className='card-img' src={item.img} alt="" />
                    <h2>{item.title}</h2>
                    <div className="card-circle"><ArrowRight /></div>
                  </div>
                  <p>{item.p}</p>
                </div>
              )
            })
          }
        {/* <div className="service-card">
            <div className="upper-sec">
              <img className='card-img' src={service1} alt="" />
              <h2>What Study at Uo?</h2>
            </div>
            <p>We have students coming from different backgrounds,cultures, & nationalities as well.</p>
            </div> */}
        </div>
        <span>Trusted by the world's <a href=""> Best University</a></span>
        <img className='degree' src={degree} alt="" />
        <div className="circles cir"></div>
        <div className="circles-2 cir"></div>
        <div className="circles-3 cir"></div>
        <div className="circles-4 cir"></div>
    </div>
  )
}

export default Service