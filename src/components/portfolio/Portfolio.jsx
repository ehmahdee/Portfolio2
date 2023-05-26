import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/5.1V-SetShips-thenGame.png'
import IMG2 from '../../assets/shareit.png'
import IMG3 from '../../assets/notetaker.png'
import IMG4 from '../../assets/weatherapi.png'
import IMG5 from '../../assets/codingquiz.png'
import IMG6 from '../../assets/SpinWheel.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Water Battle',
    github: 'https://github.com/ehmahdee/Waterbattle',
    demo: 'https://evening-ocean-56179.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'ShareIt',
    github: 'https://github.com/ehmahdee/ShareIt',
    demo: 'https://agile-ocean-55089.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Note Taker App',
    github: 'https://github.com/ehmahdee/noteTakerApp',
    demo: 'https://rocky-plateau-71582.herokuapp.com/'
  },
  {
    id: 4,
    image: IMG4,
  title: 'Weather API',
    github: 'https://github.com/ehmahdee/WeatherApi',
    demo: 'https://ehmahdee.github.io/WeatherApi/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Coding Quiz',
    github: 'https://github.com/ehmahdee/coding-quiz',
    demo: 'https://ehmahdee.github.io/coding-quiz/'
  },
  {
    id: 6,
    image: IMG6,
    title: "Can't Decide",
    github: 'https://github.com/ehmahdee/cantdecide',
    demo: 'https://ctvb.github.io/cantdecide/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github url to projects</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio