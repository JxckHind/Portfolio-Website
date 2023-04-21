import React from 'react';
import './Header.css';
import CTA from './CTA';
import Lottie from 'lottie-react';
import developer from '../../assets/designer-building-website.json';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jack Hind</h1>
        <h5 className='text-light'>Junior Web Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <Lottie animationData={developer} loop={true}/>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}


export default Header