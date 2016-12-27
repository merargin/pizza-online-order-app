import assign from 'object-assign';

import { ACTIONS } from '../constants/index.js';

const initialState = {

  size: 30,

  ingredients: [],

  rand: false,

  firstName: '',

  lastName: '',

  street: '',

  houseNumber: '',

  postCode: '',

  city: ''

}

export function order(state = 'UNSUBMITTED', action) {

  switch (action.type) {

    case ACTIONS.REQUEST:

      return ACTIONS.SUBMITTING;

    case ACTIONS.SUCCESS:

      return ACTIONS.SUBMITTED;

    case ACTIONS.FAILURE:

      return ACTIONS.FAILED;

    case ACTIONS.RESET:

      return ACTIONS.UNSUBMITTED;

    default:

      return state;

  }

}

export function form(state = initialState, action) {

  switch (action.type) {

    case ACTIONS.UPDATE:

      return assign({}, state, action.payload);

    case ACTIONS.RESET:

      return initialState;

    default:

      return state;

  }

}

export function stage(state = 0, action) {

  switch (action.type) {

    case ACTIONS.NEXT:

      return state + 1;

    case ACTIONS.PREVIOUS:

      return state - 1;

    case ACTIONS.RESET:

      return 0;

    default:

      return state;

  }

}
