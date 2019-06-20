import React from 'react'
import "../styles/hero.scss"
import bg from "../assets/hero-bg.jpg"

const Hero = () => {
  return (
    <div className="section section__hero" style={{backgroundImage: `url(${bg})`}}>
      <div className="bg-overlay">
      
      </div>
      <div className="container">
        <div className="row">
          <div className="col col-2">
            <h1 className="title">
              This is awesome title
            </h1>
            <p className="subtitle">
            Jemand musste Josef K. verleumdet haben, denn ohne dass er etwas Böses getan hätte, wurde er eines Morgens verhaftet. »Wie ein Hund!« sagte er, es war, als sollte die Scham ihn überleben.
            </p>
            <div className="btn btn--primary">
              discover awesomeness
            </div>
          </div>
          <div className="col col-2">

          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
