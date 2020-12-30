import { CHOICE, RESET } from "../constants/actions";

export const add_choice = payload => {

    return {
        type : CHOICE, payload
    }
}

export const reset = () => {

    return {
        type : RESET
    }
}