import React from 'react'
import Footer from './components/Footer'
import AdsOne from './components/headbar/ads/AdsOne'
import CardOne from './components/headbar/cards/CardOne'
import Gstore from './components/headbar/heads/Gstore'
import SlideOne from './components/headbar/slides/SlideOne'
import Nav from './components/Nav'

function Home() {
  return (
    <div>
        <Nav />
        <Gstore />
        <SlideOne />
        <CardOne />
        <AdsOne />
        <Footer />
    </div>
  )
}

export default Home