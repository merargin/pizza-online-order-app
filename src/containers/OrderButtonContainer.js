import { connect } from 'react-redux';

import OrderButton from '../components/content/OrderButton';

import { orderPizza } from '../middleware/order';

const mapStateToProps = (state) => {

  return {

    form: state.form,

    order: state.order

  };

};

const mapDispatchToProps = (dispatch) => {

  return {

    requestClick: (order) => {

      dispatch(orderPizza(order));

    }

  };

};

const OrderButtonContainer = connect(mapStateToProps, mapDispatchToProps)(OrderButton);

export default OrderButtonContainer;
