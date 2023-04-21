import React from 'react';
import './Experience.css';
import {BsCheckCircleFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Can I Do</h5>
      <h2>Technical Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <h4>HTML5</h4>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <h4>CSS3</h4>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <h4>JavaScript</h4>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <h4>React</h4>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <h4>React Native</h4>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <h4>WordPress</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsCheckCircleFill className='experience__details-icon'/>
                <h4>Node.js</h4>
              </article>
              <article className='experience__details'>
                <BsCheckCircleFill className='experience__details-icon'/>
                <h4>Express.js</h4>
              </article>
              <article className='experience__details'>
                <BsCheckCircleFill className='experience__details-icon'/>
                <h4>PostgreSQL</h4>
              </article>
              <article className='experience__details'>
                <BsCheckCircleFill className='experience__details-icon'/>
                <h4>Firebase</h4>
              </article>
              <article className='experience__details'>
                <BsCheckCircleFill className='experience__details-icon'/>
                <h4>Rest APIs</h4>
              </article>
              <article className='experience__details'>
                <BsCheckCircleFill className='experience__details-icon'/>
                <h4>Jest</h4>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience