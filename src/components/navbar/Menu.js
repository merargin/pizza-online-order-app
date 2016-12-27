import React from 'react';

import Buttons from './Buttons';

const Menu = ( props ) => {

  const menu = ['OVERVIEW', `TODAY'S MEAL`, 'MORE'];

  return (

    <ul className="pure-menu-list">

      { menu.map((menuContent, i) =>

        <li className="pure-menu-item" key={i}>

          <a href="#" className="pure-menu-link white-text">{ menuContent }</a>

        </li>

      )}

      <li className="pure-menu-item">

        <Buttons {...props} />

      </li>

    </ul>

  );

};

export default Menu;
