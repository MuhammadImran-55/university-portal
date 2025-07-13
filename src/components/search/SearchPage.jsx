// src/components/SearchPage.jsx
import React from 'react';
import './SearchPage.css';
import {X,Search,Star} from 'lucide-react'
import { courseCard } from '../../Data';

const SearchPage = ({ show, onClose }) => {
  return (
    <div className={`search-page ${show ? 'show' : ''}`}>
      <div className="search-page-content">
         <Search className='input-search'/>
        <input className='search-box' type="text" placeholder="what are you looking for..."/>
        <button onClick={onClose} style={{color:'black',float:'right',position:'absolute',top:'30px',right:'30px',border:'1px solid gray',borderRadius:'34%'}}><X className='x'/></button>
     
         <div className="search-card-box">
          <h3>OUR TOP PROGRAMS</h3>
          <div className="card-container">
     {
        courseCard.map((elem,index)=>(
          <div className="course-card" key={index}>
          <div className="img-box">
            <img src={elem.img} alt="" />
          </div>
          <div className="text-box"> 
            <div className="stars" style={{display:'flex',marginBottom:'10px'}}>
            <Star fill='yellow' className='star'/>
            <Star fill='yellow' className='star'/>
            <Star fill='yellow' className='star'/>
            <Star fill='yellow' className='star'/>
            <Star fill='yellow' className='star'/>
            </div>
            <h2 style={{color: 'black',fontSize: '18px',fontWeight:'bold'}}>{elem.h2}</h2>
          <h3 style={{marginTop: '10px'}}>{elem.h3}</h3>
          </div>
        </div>
        ))
}
</div>

          {/* <div className="course-card">
            <div className="img-box"></div>
            <div className="text-box">
              <div className="stars" style={{display:'flex',marginBottom:'10px'}}>
              <Star fill='yellow' className='star'/>
              <Star fill='yellow' className='star'/>
              <Star fill='yellow' className='star'/>
              <Star fill='yellow' className='star'/>
              <Star fill='yellow' className='star'/>
              </div>
              <h2 style={{color: 'black',fontSize: '20px',fontWeight:'bold'}}>Art& Design</h2>
            <h3 style={{marginTop: '10px'}}>$84.00</h3>
            </div>
          </div> */}
         </div>
      </div>
    </div>
  );
};

export default SearchPage;
