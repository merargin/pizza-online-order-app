import React from 'react';

import { connect } from 'react-redux';

import Header from './Header';

import Content from './Content';

const App = ( props ) => (

  <div className={props.stage === 4 ? 'orange-background' : ''}>

    <Header />

    <Content />

  </div>

);

App.propTypes = {

  stage: React.PropTypes.number.isRequired

};

const mapStateToProps = (state) => {

  return {

    stage: state.stage

  };

};

export default connect(mapStateToProps)(App);
