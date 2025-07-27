import {React, useState, useEffect} from 'react'
import './Header.css'
import home from '../../assets/images/home-1.png'
import {data} from '../../Data'
import {ChevronDown,Search ,GraduationCap} from 'lucide-react'
import SearchPage from '../search/SearchPage'
import menuShape from '../../assets/images/menu-cta-shape.png'
import menuShape2 from '../../assets/images/menu-shape-1.png'
import menuShape3 from '../../assets/images/menu-shape-2.png'
import { Link } from 'react-router-dom'


const Header = () => {
  const [showSearch, setShowSearch] = useState(false);


  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
   
       
        
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className={`head  header ${isSticky ? 'sticky' : ''}`} >
        <div className="logo">
            <span style={{display: 'flex'}}><GraduationCap size={40} fill='transparent' style={{transform: 'rotate(-45deg) translate(20px, -6px)'}}/>LERNIX</span>
        </div>
        <ul className="menu">
    <li className="menu-item">
      <span style={{display:'flex'}}>Home <ChevronDown className='arrow-head'/></span>
      <div className="dropdown drop-1">
        <ul>
          {
            data.map((item, index) => (
              <div className="main-item">
                <li key={index}><a href={item.href}
                target="_blank"
        rel="noopener noreferrer"><img className='main-img' src={item.img} alt="" /><span>{item.title}</span></a></li>
              </div>
            ))
          }
        </ul>
      </div>
    </li>
    <li className="menu-item">
      <span style={{display:'flex'}}>Academics <ChevronDown className='arrow-head'/></span>
      <div className="drop-2">
        <ul>
         <div>
          <li><Link to="/overview">overview</Link></li>
          <li><Link to="/undergraduates">Under Graduate</Link></li>
          <li><Link to="/graduates">Graduate</Link></li>
          <li><Link to="/comingsoon">School</Link></li>
         </div>
         <div>
          <li><Link to="/comingsoon">Kid Education</Link></li>
          <li><a href="https://muhammadimran-55.github.io/learning-management/">off Campus Learning</a></li>
          <li><Link to="/faculty">Faculty</Link></li>
         </div>
        </ul>
         <div className="drop-2-bottom">
          <img src={menuShape} alt="" />
          <h1>All Signature Program</h1>
          <button>Apply Now</button>
         </div>
      </div>
    </li>
    <li className="menu-item">
      <span style={{display:'flex'}}>Admissions <ChevronDown className='arrow-head'/></span>
      <div className="drop-3">
        <ul>
          <li><a href="#">Overview</a></li>
          <li><a href="#">How to Apply</a></li>
          <li><a href="#">Tuition&fees</a></li>
          <li><a href="#">Financial Aid</a></li>
          <li><a href="#">Date&Deadline</a></li>
          <li><a href="#">Schedule Tour</a></li>
        </ul>
      </div>
    </li>
    <li className="menu-item">
       <span style={{display:'flex'}}>Blogs <ChevronDown className='arrow-head'/></span>
      <div className="drop-4">
        <ul>
          <div>
            <li><h1 style={{fontSize:'24px',borderBottom:'1px solid grey',padding:'10px'}}>Overview</h1></li>
            <li><a href="#">Overview</a></li>
          <li><a href="#">How to Apply</a></li>
          <li><a href="#">Tuition&fees</a></li>
          <li><a href="#">Financial Aid</a></li>
          <li><a href="#">Date&Deadline</a></li>
          <li><a href="#">Schedule Tour</a></li>
          </div>
          <div>
            <li><h1 style={{fontSize:'24px',borderBottom:'1px solid grey',padding:'10px'}}>Overview</h1></li>
            <li><a href="#">Overview</a></li>
          <li><a href="#">How to Apply</a></li>
          <li><a href="#">Tuition&fees</a></li>
          <li><a href="#">Financial Aid</a></li>
          <li><a href="#">Date&Deadline</a></li>
          <li><a href="#">Schedule Tour</a></li>
          </div>
          <div>
            <li><h1 style={{fontSize:'24px',borderBottom:'1px solid grey',padding:'10px'}}>Overview</h1></li>
            <li><a href="#">Overview</a></li>
          <li><a href="#">How to Apply</a></li>
          <li><a href="#">Tuition&fees</a></li>
          <li><a href="#">Financial Aid</a></li>
          <li><a href="#">Date&Deadline</a></li>
          <li><a href="#">Schedule Tour</a></li>

          </div>
          <div>
            <li><h1 style={{fontSize:'24px',borderBottom:'1px solid grey',padding:'10px'}}>Overview</h1></li>
            <li><a href="#">Overview</a></li>
          <li><a href="#">How to Apply</a></li>
          <li><a href="#">Tuition&fees</a></li>
          <li><a href="#">Financial Aid</a></li>
          <li><a href="#">Date&Deadline</a></li>
          <li><a href="#">Schedule Tour</a></li>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
            <div className="d-page pages-upper">
              <div className="txt">
                <h1>Online <br /> Learning Platform</h1>
                <button><a href="">All Courses</a></button>
              </div>
                <img src={menuShape2} alt="" />
              
            </div>
            <div className="d-page pages-lower">
              <div className="txt">
                <h1>Accelerated <br /> Degree Program</h1>
                <button className='btn-2'><a href="">All Courses</a></button>
              </div>
                <img src={menuShape3} alt="" />
              
            </div>
          </div>
        </ul>
      </div>
    </li>
    <li className="menu-item">
      <span style={{display:'flex'}}>Pages <ChevronDown className='arrow-head'/></span>
      <div className="drop-3">
        <ul>
          <li><a href="#">Blog detail</a></li>
          <li><a href="#">Blog standard</a></li>
          <li><a href="#">Blog detail</a></li>
          <li><a href="#">Blog detail</a></li>
          <li><a href="#">Blog </a></li>
          <li><a href="#">Blog latest</a></li>
        </ul>
      </div>
    </li>
  </ul>
            <div className="extra">
              <span><Search className='search' onClick={() => setShowSearch(true)}
        style={{ cursor: 'pointer', fontSize: '20px' }}
        title="Search"/></span>
         {/* Sliding Search Page */}
      <SearchPage show={showSearch} onClose={() => setShowSearch(false)} />
             <Link to='/login'> <button>Apply Now</button></Link>
            </div>  
    </div>
  )
}

export default Header