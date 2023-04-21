import React from 'react';
import './About.css';
import Lottie from 'lottie-react';
import code from '../../assets/61918-code-animation.json';
import {BsFillWalletFill} from 'react-icons/bs';
import {BsCodeSlash} from 'react-icons/bs'
import {BsFillAwardFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <Lottie animationData={code} loop={true}/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsFillWalletFill className='about__icon'/>
              <h5>Experience</h5>
              <small>6 months</small>
            </article>
            <article className="about__card">
              <BsCodeSlash className='about__icon'/>
              <h5>Northcoders Bootcamp</h5>
              <small>480 Coding Hours</small>
            </article>
            <article className="about__card">
              <BsFillAwardFill className='about__icon'/>
              <h5>A Levels</h5>
              <small>A* A* A* A</small>
            </article>
          </div>
          <p>
            Since finishing secondary school, I had always wanted to learn how to code. I have grown up with a passion for technology, but my interest in software first started when I wanted to be able to build my own web applications. I discovered Northcoders after looking into development courses and successfully got a place on their software developer bootcamp. I learnt such a vast amount in just over 3 months and it certainly reinforced my love for tech and desire to work in the industry. The course allowed me to land my first role as a Junior Web Developer, exposing me to new tech with a different development workflow which I have enjoyed adapting to. Learning and problem solving on a whole is something I have missed since finishing my A Levels and I am excited to continue growing my knowledge within the tech sector as my career progresses.
          </p>
          <a href='#contact' className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About