import React from 'react';

import { connect } from 'react-redux';

import { next, previous, reset, update } from '../actions/actionCreators';

import { Splash, OrderForm, Form, Review, Confirm } from '../components/content/';

const Content = (props) => {

  switch (props.stage) {

    case 0:

      return (<Splash {...props} />);

    case 1:

      return (<OrderForm {...props} />);

    case 2:

      return (<Form {...props} />);

    case 3:

      return (<Review {...props} />);

    case 4:

      return (<Confirm {...props} />);

    default:

      return null;
  }
};

Content.propTypes = {

  stage: React.PropTypes.number.isRequired

};

const mapStateToProps = (state) => {

  return {

    stage: state.stage,

    form: state.form

  };

};

const mapDispatchToProps = (dispatch) => {

  return {

    startClick: () => {

      dispatch(next());

    },

    nextClick: () => {

      dispatch(next());

    },

    prevClick: () => {

      dispatch(previous());

    },

    resetClick: () => {

      dispatch(reset());

    },

    updateForm: (obj) => {

      dispatch(update(obj));

    }

  };

};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
