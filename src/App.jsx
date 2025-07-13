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
import CardSlider from './components/SliderLearn'
import Footer from './components/footer/Footer'
import AdmissionForm from './components/admissonForm/AdmissionForm'
import Achivement from './components/achivement/Achivement'


const App = () => (
  <>
    <TopBar />
    <Header/>
    {/* <AdmissionForm/> */}
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

export default App