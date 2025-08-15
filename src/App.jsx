import React from 'react'
import './App.css'
import Header from './components/header/Header'
import TopBar from './components/topbar/TopBar'
import Hero from './components/hero-section/Hero'
import Service from './components/services/Service'
import ImageSlider from './components/slider/ImageSlider'
import MarqueeText from './components/marquee/MarqueeText'
import About from './components/about/About'
import Counter from './components/counter/Counter'
import Programs from './components/programms/Programs'
import Events from './components/events/Events'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import AdmissionForm from './components/admissonForm/AdmissionForm'
import Achivement from './components/achivement/Achivement'
import { Route, Routes, useLocation } from 'react-router-dom'
import Overview from './pages/Overview'
import UnderGraduates from './pages/UnderGraduates'
import Graduates from './pages/Graduates'
import ComingSoon from './pages/ComingSoon'
import Faculty from './pages/Faculty'
import HowToApply from './pages/HowToApply'
import CampusLife from './pages/CampusLife'
import Profile from './pages/Profile'
import StudentDashboard from './pages/student/StudentDashboard'
import StudentDash from './pages/StudentDash'


const App = () => {

  const location=useLocation();
   const hideLayoutRoutes=['/login','/overview','/undergraduates','/graduates','/comingsoon','/faculty','/howtoapply','/campuslife','/studentDashboard'];
   const shouldHideLayout=hideLayoutRoutes.includes(location.pathname);

  return(
  <>
  <Routes>
     <Route path='/login' element={<AdmissionForm/>} />
     <Route path='/overview' element={<Overview/>} />
     <Route path='/undergraduates' element={<UnderGraduates/>} />
     <Route path='/graduates' element={<Graduates/>} />
     <Route path='/comingsoon' element={<ComingSoon/>} />
     <Route path='/faculty' element={<Faculty/>} />
     <Route path='/howtoapply' element={<HowToApply/>} />
     <Route path='/campuslife' element={<CampusLife/>} />
     <Route path='/studentDashboard' element={<StudentDashboard/>} />
  </Routes>
  {!shouldHideLayout && (
    <>
    <TopBar />
    <Header/>
    <Hero/>
    <Service/>
    <MarqueeText/>
    <About/>
    <Achivement/>
    <Programs/>
    <Events/>
    <Testimonials/>

    <Footer/>
    {/* <Profile/> */}
    <StudentDashboard/>
    {/* <StudentDash/> */}
  </>
  )
}
  </>
)}
export default App