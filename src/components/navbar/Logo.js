import React from 'react';

const logo = '../../src/assets/logo/feedme_logo.png';

const logoWhite = '../../src/assets/logo/feedme_logo_white.png';

const Logo = ({ stage }) => (

  <div id="logo">

    <a href="#" className={ stage > 0 ? 'dark-text icon-button' : 'white-text icon-button'}>

      <img className="icon-left" src={ stage === 0 ? logoWhite : logo } alt="logo" height="16" />

      <span>feed.me</span>

    </a>

  </div>

);

Logo.propTypes = {

  stage: React.PropTypes.number.isRequired

};

export default Logo;
