import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/jackhind/' target='__blank'><BsLinkedin/></a>
        <a href='https://github.com/JxckHind/' target='__blank'><BsGithub/></a>
        <a href='tel:07873821633'><BsFillTelephoneFill/></a>
        <a href='malito: jackhind@live.co.uk'><MdEmail/></a>
    </div>
  )
}

export default HeaderSocials