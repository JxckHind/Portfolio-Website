import React from 'react';
import './Nav.css';
import {BsHouseDoorFill} from 'react-icons/bs';
import {BsPersonFill} from 'react-icons/bs';
import {BsFillWalletFill} from 'react-icons/bs';
import {BsBookFill} from 'react-icons/bs';
import {BsFillTelephoneFill} from 'react-icons/bs';
import { useState } from 'react';

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BsHouseDoorFill/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsPersonFill/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsFillWalletFill/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsBookFill/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BsFillTelephoneFill/></a>
    </nav>
  )
}

export default Nav