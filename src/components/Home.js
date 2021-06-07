import React from 'react';
import './Home.css';
import { Mountain, Trees, Alps } from '../images/svg.js';
import { ArrowRight } from 'react-feather';

export default function Home(props) {
  return (
    <div className='home-container'>
      <section className='header-section'>
        <h1 className='home-header'>Welcome to Tripper</h1>
        <p className='home-paragraph'>Your holidays at a glance</p>
      </section>

      <section className='second-home-section'>
        <div className='description-p'>
          <Trees />
          <p> Navigate through active, upcoming & past trips </p>
        </div>
        <div className='description-p'>
          <Mountain />
          <p> Get all relevant trip info in one click </p>
        </div>
        <div className='description-p'>
          <Alps />
          <p> Invite friends and manage expenses </p>
        </div>
      </section>

      <h1 className='home-title'>Stay on top of your travels</h1>
      <section className='home-section'>
        <p className='home-description'>
          Tripper is your complete travel manager. <br />
          It centralizes all relevant trip info in a single application,
          <br />
          for you and your friends to best plan your next holidays!
        </p>
      </section>
      <div className='go-to-features-section'>
        <button className='go-to-features-button'>
          <a href='/AboutTripper'>Check out the features</a>
          <ArrowRight color='white' size={24} />
        </button>
      </div>
    </div>
  );
}
