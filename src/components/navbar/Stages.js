import React from 'react';

import Buttons from './Buttons';

const Stages = ( props ) => {

  const stages = ['ORDER', 'ADDRESS', 'FINISH'];

  return (

    <ul id="stages" className="pure-menu-list">

      { props.stage < 4 ? stages.map((stage, i) =>

        <li key={ i } className="pure-menu-item">

          <a href="#"

            className={ i === props.stage - 1 ? 'pure-menu-link bottom-shadow-red' : 'pure-menu-link' }>

            { stage }

          </a>

        </li>

      ) : null}

      <li className="pure-menu-item">

        <Buttons {...props} />

      </li>

    </ul>

  );

};

Stages.propTypes = {

  stage: React.PropTypes.number.isRequired

};

export default Stages;
