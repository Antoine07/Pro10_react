import {
    ON_CHANGE,
    ADD_DRAGON,
    DELETE_DRAGON,
    REVERSE_DRAGON,
    ADD_HISTORY
} from '../constants/actions';

// Dragon
export const set_dragon = payload => {

    return {
        type : ON_CHANGE, payload
    }
}

export const add_dragon = () => {

    return {
        type : ADD_DRAGON
    }
}

export const delete_dragon = payload => {
    return {
        type : DELETE_DRAGON, payload
    }
}

export const reverse_dragon = () => {

    return {
        type : REVERSE_DRAGON
    }
}

// History
export const add_history = payload => {

    return {
        type : ADD_HISTORY, payload
    }
}