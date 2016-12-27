import React from 'react';

const Buttons = ({ stage, startClick, cancelClick }) => {

  switch (stage) {

    case 0:

      return (<button className="red pure-button button-large" onClick={ startClick }>ORDER TODAY'S MEAL</button>);

    case 4:

      return (

        <button className="green pure-button button-large">

          ✓ ORDER SENT

        </button>

      );

    default:

      return (

        <button className="button-red pure-button" onClick={ cancelClick }>

          <img className="icon-left" src='../../src/assets/icons/cancel_icon.png' />

          <span>CANCEL ORDER</span>

        </button>

      );
  }
};

Buttons.propTypes = {

  stage: React.PropTypes.number.isRequired,

  startClick: React.PropTypes.func.isRequired,

  cancelClick: React.PropTypes.func.isRequired,

};

export default Buttons;
