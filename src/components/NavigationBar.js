import React from 'react';
import './NavigationBar.css';
import Bus from '../bus.jpg';

export default function Navigationbar(props) {
  return (
    <div className='navigation-container'>
      <div className='navigation'>
        <a className='active' href='/'>
          Home
        </a>
        <a href='/AboutTripper'>Tripper</a>
        <a href='/TripperFeatures'>Features</a>
        <a href='/AboutMe'>About</a>
        <a href='/Contact'>Contact</a>
        <div>
          <button className='sign-up-button'>Sign up</button>
        </div>
      </div>
      <img src={Bus} alt='bus' />
    </div>
  );
}
