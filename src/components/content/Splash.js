import React from 'react';

const Splash = ({ startClick }) => (

  <main className="text-bold">

    <div className="paper">

      <img src='../../src/assets/logo/feedme_logo_white.png' />

      <h1>Chosen food every 5 day</h1>

      <p>Today on the table: <span className="bottom-shadow-red">Original Steinofen-Pizza</span></p>

    </div>

    <div className="paper">

      <button onClick={startClick} id="splash-button" className="pure-button">

        <img className="icon-left" src='../../src/assets/icons/order_icon.png' />

        <span>Order Today’s Meal</span>

      </button>

    </div>

    <div className="paper">

      <p>Check out our meal for tomorrow.</p>

      <small>Made with love.</small>

      <div className="icon-bottom"><img src='../../src/assets/icons/scroll_icon.png' /></div>

    </div>

  </main>

);

Splash.propTypes = {

  startClick: React.PropTypes.func.isRequired,

};

export default Splash;
