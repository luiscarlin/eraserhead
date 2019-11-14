import React from 'react'
import Header from './Header'
import LazyHero from 'react-lazy-hero'
import background from '../../../assets/target-person.jpg'
import './hero.scss'

function Hero() {
  return (
    <section className="hero">
      <div className="header-container">
        <Header />
      </div>
      <LazyHero
        imageSrc={background}
        color="#191919"
        minHeight={'100%'}
        opacity={0.6}
        transitionDuration={500}
        isCentered={true}
      >
        <p className="title">EraserHead</p>
      </LazyHero>
    </section>
  )
}

export default Hero
