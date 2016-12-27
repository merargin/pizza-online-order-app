import React from 'react';

import Stages from './Stages';

import Menu from './Menu';

const Nav = (props) => {

  const Empty = () => null;

  return (

    <nav>

      <div className="pure-menu pure-menu-horizontal">

        { props.stage === 0 ? <Menu {...props} /> : <Empty /> }

        { props.stage > 0 ? <Stages {...props} /> : <Empty /> }

      </div>

    </nav>

  );

};

Nav.propTypes = {

  stage: React.PropTypes.number.isRequired

};

export default Nav;
