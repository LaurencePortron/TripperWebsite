import React from 'react';
import './Footer.css';
import { GitHub, Linkedin, ArrowRight } from 'react-feather';

export default function Footer(props) {
  return (
    <footer id='footer'>
      <div className='footer-top'>
        <ul>
          <li className='navigation-section'>
            <h3>Navigation</h3>
            <a href='/'>Home</a>
            <a href='/AboutTripper'>Tripper</a>
            <a href='/TripperFeatures'>Features</a>
            <a href='/AboutMe'>About</a>
            <a href='/Contact'>Contact</a>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Social Media</h3>
            <div className='icons'>
              <GitHub size={20} color='#b37650' />
              <a href='https://github.com/LaurencePortron'>Github</a>
            </div>
            <div className='icons'>
              <Linkedin size={20} color='#b37650' />
              <a href='https://www.linkedin.com/in/laurenceportron/'>
                Linkedin
              </a>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Tripper</h3>

            <li>
              <button className='sign-up-button'>
                <p>Plan your first trip</p>
                <ArrowRight color='white' size={24} />
              </button>
            </li>
          </li>
        </ul>
      </div>
      <div className='footer-bottom'>
        <div className='modal'>
          <h3>Reach out</h3>
          <p>Hey! Send me feedback :)</p>
          <form action=''>
            <label htmlFor='email' hidden>
              Email
            </label>
            <input type='email' name='email' placeholder='Enter your email' />
            <button className='btn' type='submit'>
              Send
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
