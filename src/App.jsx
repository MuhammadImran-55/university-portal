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


const App = () => {

  const location=useLocation();
   const hideLayoutRoutes=['/login','/overview'];
   const shouldHideLayout=hideLayoutRoutes.includes(location.pathname);

  return(
  <>
  <Routes>
     <Route path='/login' element={<AdmissionForm/>} />
     <Route path='/overview' element={<Overview/>} />
  </Routes>
  {!shouldHideLayout && (
    <>
    <TopBar />
    <Header/>
    <Hero/>
    <Service/>
    <MarqueeText/>
    {/* <ImageSlider/> */}
    <About/>
    <Achivement/>
    {/* <Counter  /> */}
    <Programs/>
    <Events/>
    <Testimonials/>

    <Footer/>
  </>
  )
}
  </>
)}
export default App