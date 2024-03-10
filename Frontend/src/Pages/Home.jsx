import React from 'react'
import HeroSection from '../Component/HeroSection'
import About from '../Component/About'
import Qualities from '../Component/Qualities'
import Menus from '../Component/Menus'
import WhoAreWe from '../Component/WhoAreWe'
import Team from '../Component/Team'
import Reservation from '../Component/Reservation'
import Footer from '../Component/Footer'
const Home = () => {
    return (
        <>
         <HeroSection />
         <About />
         <Qualities />
         <Menus />
         <WhoAreWe />
         <Team />
         <Reservation />
         <Footer />
        </>
    )
}

export default Home