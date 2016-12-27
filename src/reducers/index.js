import { combineReducers } from 'redux';

import { order, form, stage } from './reducers';

const rootReducer = combineReducers({

    order,

    form,

    stage

});

export default rootReducer;
