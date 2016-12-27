import React from 'react';

import { connect } from 'react-redux';

import { next, reset } from '../actions/actionCreators';

import { Nav, Logo } from '../components/navbar';

const Header = (props) => (

  <header className={props.stage === 0 ? 'translucent' : 'white'}>

    <Logo stage={props.stage} />

    <Nav {...props}/>

  </header>

);

Header.propTypes = {

  stage: React.PropTypes.number.isRequired

};

const mapStateToProps = (state) => {

  return {

    stage: state.stage

  };

};

const mapDispatchToProps = (dispatch) => {

  return {

    startClick: () => {

      dispatch(next());

    },

    cancelClick: () => {

      dispatch(reset());

    }

  };

};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
