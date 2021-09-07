// import {heroBackground} from '../assets/images/homepage/hero.jpg'

import React from 'react'

export default function Hero() {
    return (
      <section id="hero">
        {/* <Link to="/">
          <img className="hero-image" src={heroBackground} alt="hero" />
        </Link> */}

        <div className="text-box">
          <h1>Wild and Moon</h1>
          <h2> because food matters</h2>
          <div className="h2-sub">{/* <TypedText /> */}</div>
        </div>
      </section>
    );
}
