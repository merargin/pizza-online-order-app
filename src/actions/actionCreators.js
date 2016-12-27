import { ACTIONS } from '../constants/index.js';

export function update(obj) {

    return {

        type: ACTIONS.UPDATE,

        payload: obj

    }

}

export function next() {

    return {

        type: ACTIONS.NEXT

    }

}

export function previous() {

    return {

        type: ACTIONS.PREVIOUS

    }

}

export function reset() {

    return {

        type: ACTIONS.RESET

    }

}

export function request() {

    return {

        type: ACTIONS.REQUEST

    }

}

export function success() {

    return {

        type: ACTIONS.SUCCESS

    }

}

export function failure() {

    return {

        type: ACTIONS.FAILURE

    }

}