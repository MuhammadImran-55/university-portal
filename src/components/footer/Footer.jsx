import React from 'react'
import './Footer.css'
import FooterBottom from './FooterBottom'
import { MailCheck } from 'lucide-react'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className="first">
            <h1 className='f-logo'>Acadia</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, nostrum.</p>
            <h1 className='f-h-2'><span>Got Questions? Call us</span><br />+92 301 1574440</h1>
            <div style={{display:'flex',gap:'10px',fontSize:'18px'}}><MailCheck />mimran11600@gmail.com</div>
        </div>
        <div className="second">
            <h1 className='s-h1'>About</h1>
            <h2><a href="">About Us</a></h2>
            <h2><a href="">Courses</a></h2>
            <h2><a href="">New & Blog</a></h2>
            <h2><a href="">Become a Teacher</a></h2>
            <h2><a href="">Events</a></h2>
            <h2><a href="">Contact</a></h2>
        </div>
        <div className="third">
             <h1 className='t-h1'>Quick Links</h1>
             <h2><a href="">Students</a></h2>
             <h2><a href="">Admission</a></h2>
             <h2><a href="">faculty&Staff</a></h2>
             <h2><a href="">Media Relations</a></h2>
             <h2><a href="">Alumni</a></h2>
        </div>
        <div className="fourth">
            <h1 className='f-news'>Our NewsLetter</h1>
            <h2 style={{width:'300px',margin:'20px 0'}}>Enter your E-mail and we will send you more information</h2>
            <div className="input">

            <input type="text" placeholder='Enter your Email' /><button>submit</button>
            </div>
        </div>

    </div>
    <FooterBottom/>
    </>
  )
}

export default Footer