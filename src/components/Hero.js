import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div className="underline"></div>
          <h1>I'm Sergey</h1>
          <h4>freelance web and mobile UX/UI Designer</h4>
          <Link to="/contact" className="btn">
            contact me
          </Link>
          <div className="social-links">
            {socialLinks.map(link => {
              return (
                <a href={link.url} key={link.id} className="social-link">
                  {link.icon}
                </a>
              )
            })}
          </div>
        </article>
        <StaticImage
          src="../assets/images/hero.svg"
          alt="portfolio"
          placeholder="blurred"
          className="hero-img"
        />
        {/* <img src={heroImg} alt="portfolio" className="hero-img-svg" /> */}
      </section>
    </header>
  )
}

export default Hero
