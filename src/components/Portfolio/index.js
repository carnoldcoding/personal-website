import React from 'react'
import "./PortfolioStyles.scss"
import FeaturedProject from './FeaturedProject'
import {featured1} from "./data"

const Portfolio = () => {
  return (
      <section id="Portfolio">
      <FeaturedProject {...featured1} />
      </section>
  )
}

export default Portfolio
