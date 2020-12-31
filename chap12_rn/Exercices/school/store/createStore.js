import { applyMiddleware, createStore } from 'redux';
// pour gérer l'asynchrone dans Redux on ne l'utilise pas ici pour l'instant
import thunkMiddleware from 'redux-thunk';

import reducer from "../reducers/index";

import { set_behaviours } from '../actions/actions-types';

const configureStore = (preloadState) =>{

    const middleware = [thunkMiddleware];

    const store = createStore(reducer, preloadState, applyMiddleware( ...middleware)  );

    // mettre à jour les comportements !
    store.dispatch(set_behaviours());

    return store;
}

export default configureStore;