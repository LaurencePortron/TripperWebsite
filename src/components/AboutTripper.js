import React from 'react';
import './AboutTripper.css';
import Welcome from '../welcome.png';
import Overview from '../overview.png';
import NavVideo from '../trippernavigation.gif';
import TripperLogin from '../tripperlogin.png';
import { ArrowRight } from 'react-feather';

export default function AboutTripper(props) {
  return (
    <div className='about-tripper-container'>
      <h1 className='image-section-title'>First React Native Project</h1>
      <div className='image-section'>
        <div className='image-section-paragraph'>
          <h3 className='context-title'>Context</h3>
          <p>
            Tripper started as a REACT.js web application during an individual
            24h hackathon at my apprenticeship. <br />
            I got really intruiged by this project and decided to continue by
            switching over to React Native. <br />
            Never coded with React Native before but it is actually a quite
            pleasant experience.
          </p>
        </div>
      </div>

      <section className='quote-section'>
        <blockquote>
          “Tripper is your complete travel manager. <br />
          It centralizes all relevant trip info in a single application,
          <br />
          for you and your friends to best plan your next holidays!”
        </blockquote>
        <div className='tripper-images'>
          <img src={Welcome} alt='tripper-dashboard' />
          <img src={Overview} alt='tripper-overview' />
        </div>
      </section>

      <section className='feature-section'>
        <h1 className='feature-section-header'>
          Planning your holdays has never been so easy
        </h1>
        <div className='right-and-left-feature-section'>
          <img src={TripperLogin} alt='tripper-login' />
          <div className='left-feature-section'>
            <div class='vl'>
              <h3>Fast Navigation</h3>
              <p>
                Slide through all created trips, <br />
                whether they are active, upcoming or past
              </p>
            </div>
            <div class='vl'>
              <h3>Trip Info in one Click</h3>
              <p>
                Get all relevant trip info such as total
                <br /> expenses, number of participants
                <br /> & stops, planned activities,..
              </p>
            </div>
            <div class='vl'>
              <h3>Invite your friends</h3>
              <p>
                Send invites for your friends to join <br />
                and help planning your holidays.
              </p>
            </div>
          </div>
          <div className='right-feature-section'>
            <div class='vl'>
              <h3>Associate activities</h3>
              <p>
                Plan activities for your trip and centralize <br />
                them in your trip details.
              </p>
            </div>
            <div class='vl'>
              <h3>Manage expenses</h3>
              <p>
                Add and split any trip expenses <br />
                for your and you friends.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='nav-video-section'>
        <div className='nav-video-description'>
          <h2>All you need</h2>
          <p>
            Tripper started as a REACT.js web application during an individual
            24h hackathon at my apprenticeship. <br />
            I got really intruiged by this project and decided to continue by
            switching over to React Native. <br />
            Never coded with React Native before but it is actually a quite
            pleasant experience.
          </p>
          <div className='go-to-features-section'>
            <button className='go-to-features-button'>
              <a href='/TripperFeatures'>Feature Details</a>
              <ArrowRight color='white' size={24} />
            </button>
          </div>
        </div>
        <div className='nav-video'>
          <embed
            src={NavVideo}
            allowfullscreen='true'
            width='300'
            height='600'
          ></embed>
        </div>
      </section>
    </div>
  );
}
