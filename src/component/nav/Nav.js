import './Nav.css';
import React from 'react';
import Profile from '../profile/Profile'
// import './style.css'
import Buttons from '../button/buttons';


const Nav = () => {
  return (
    <nav
      style={{
        backgroundColor: 'rgb(25,25,25)'
      }}
    >
      {/* <section> */}
        <div className='nav_left'>
          <img
            className='nav_logo'
            alt='logo'
            src='https://www.pngfind.com/pngs/m/625-6256136_rockstar-games-logo-png-png-download-rockstar-games.png'
          />
          <div className='nav_links'>
            <a href='http://localhost:3000'> HOME </a>
            <a href='form.html'> RESUMEs </a>
            <a href='formcv.html'> CVs </a>
            <a href='tips.html'>Tips of creating good resume</a>
            <a href='/'> FAQs </a>
            
          </div>
        </div>
        <div className='nav_right'>
          
        <Buttons />
        <Profile/>
          
        </div>
      {/* </section> */}
    </nav>
  );
};

export default Nav;