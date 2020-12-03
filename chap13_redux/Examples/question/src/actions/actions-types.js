


import { ON_CHANGE, ADD_QUESTION } from '../constants/actions';

export const set_question = payload => {

    return {
        type: ON_CHANGE, payload
    }
}

export const add_question = () => {

    return {
        type: ADD_QUESTION,
    }
}