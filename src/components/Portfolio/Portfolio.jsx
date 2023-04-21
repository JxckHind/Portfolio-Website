import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <h3>NC News Backend</h3>
          <div className="portfolio__item-cta">
            <a href='http://github.com/JxckHind/NC-News-Backend' className='btn' target='_blank' rel='noreferrer'>GitHub</a>
            <a href='https://jack-nc-news-ap.onrender.com/' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <h3>NC News Frontend</h3>
          <div className="portfolio__item-cta">
            <a href='http://github.com/JxckHind/NC-News-Frontend' className='btn' target='_blank' rel='noreferrer'>GitHub</a>
            <a href='https://nc-news-project.netlify.app/' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <h3>Swipe Style</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/Cam-Bloom/Swipe-Style' className='btn' target='_blank' rel='noreferrer'>FE Repo</a>
            <a href='https://github.com/Superjim/clothes-backend' className='btn btn-primary' target='_blank' rel='noreferrer'>BE Repo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio