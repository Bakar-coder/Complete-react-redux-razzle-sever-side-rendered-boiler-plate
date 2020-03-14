import React from 'react';
import logo from '../react.svg';

const HomePage = () => {
  return (
    <div className='home'>
      <div className='home__content'>
        <img src={logo} className='Home-logo' alt='logo' />
        <h1>
          SERVER SIDE RENDERED SEO READY REACT, RAZZLE & REDUX <br />{' '}
          BOILERPLATE WITH STATIC ROUTING.
        </h1>
        <h3>
          Created by -: <span>Wabomba Bakar</span>
        </h3>
        <p>
          Email -: <span>wabombabakar@gmail.com</span>
        </p>
        <p>
          View :
          <a href='https://github.com/Bakar-coder' target='_blank'>
            Github
          </a>
        </p>
      </div>
    </div>
  );
};

export default {
  component: HomePage
};
