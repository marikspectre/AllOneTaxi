import React from 'react'
import AdsTwo from './headbar/ads/AdsTwo'
import CardTwo from './headbar/cards/CardTwo'
import Phone from './headbar/heads/Phone'
import SlideTwo from './headbar/slides/SlideTwo'
import Footer from './Footer'
import Nav from './Nav'

function Driver() {
    return (
        <div>
            <Nav />
            <Phone />
            <SlideTwo />
            <CardTwo />
            <AdsTwo />
            <Footer />
        </div>
    )
}

export default Driver