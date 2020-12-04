import { INCREMENT, SET_USERS } from "../constants/actions";

let interval = null;

// Cette action retourne un dispatch qui sera fait de manière aysnchrone
// c'est dans les actions-types que l'on va gérer ce type de problématique 
export const start_counter = () => {
  clearInterval(interval);

  return dispatch => {
    interval = setInterval(() => {
      dispatch(increment());
    }, 1000);
  };
};

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const load_users = () => {

    return dispatch => {
        const asyncFetch = async url => {
            const response = await fetch(url);
            const users = await response.json();
            const waiting = await new Promise( res => setTimeout(() => res(true), 1000) );

            dispatch(set_users({users})) ;
        }

        // asynchrone
        asyncFetch('https://jsonplaceholder.typicode.com/users');
    }
}

export const set_users = payload => {

    return {
        type : SET_USERS, payload
    }
}