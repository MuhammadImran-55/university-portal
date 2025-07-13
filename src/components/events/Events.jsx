import React from 'react'
import './Events.css'
import curvy from '../../assets/images/curvyline-1.svg'
import { ArrowRight,MapPin ,Clock, MoveRight } from 'lucide-react'


const Events = () => {

   const eventData = [
    {
      date :{
        day: '08',
        month: 'May, 2025'
      },
      title: 'Street Performance: Call for Artist',
      time: '9:00AM - 12:00AM',
      location: 'Pakistan',
    
    },
    {
      date :{
        day: '15',
        month: 'May, 2025'
      },
      title: 'Global Education Fall Meeting for Everyone',
      time: '11:00AM - 12:00AM',
      location: 'Pakistan',
    
    },
    {
      date :{
        day: '28',
        month: 'August, 2025'
      },
      title: 'Independent Research: Research Day',
      time: '9:00AM - 12:00AM',
      location: 'Pakistan',
    
    },
    {
      date :{
        day: '19',
        month: 'June, 2025'
      },
      title: 'The Middle East in the Twentieth Century',
      time: '11:00AM - 1:00PM',
      location: 'Pakistan',
    
    },
   ]




  return (
    <div className='events-sec'>
        <div className="upper">
        <h1>Recent & <br />  Upcoming <span style={{color:'#AB0C2F'}}> Events</span></h1>
        <button>See More Events<ArrowRight className='moveRight'/></button>
        <img src={curvy} alt="" />
        </div>
        <div className="lower">
         {
          eventData.map((event, index)=>(
            <div className="event-card" key={index}>
              <h1>{event.date.day} <span>{event.date.month}</span></h1>
            <h1>{event.title}
              <span><Clock /> {event.time} <MapPin /> {event.location}</span>
            </h1>
            <div><ArrowRight className='moveRight'/></div>
            </div>
          ))
         }




          {/* <div className="event-card">
            <h1>08 <span>May, 2025</span></h1>
            <h1>Street Performance: Call for Artist
              <span><Clock /> 9:00AM - 12:00AM <MapPin /> Pakistan</span>
            </h1>
            <div><ArrowRight className='moveRight'/></div>
          </div> */}
        </div>
    </div>
  )
}

export default Events