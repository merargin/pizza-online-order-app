import fetch from 'isomorphic-fetch';

import { next, success, request, failure } from '../actions/actionCreators';

import { END_POINT } from '../constants/index.js';

export function orderPizza(order) {

    return function(dispatch) {

      dispatch(request());

      fetch(END_POINT, {

        method: 'POST',

        body: JSON.stringify(order)

      }).then(() => {

        dispatch(success());

        dispatch(next());

      }).catch(() => {

        dispatch(failure());

      });

    }

}
