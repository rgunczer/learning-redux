import $ from 'jquery';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    recipes: [],
    ingredients: []
};

const reducer = (state, action) => state

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // applyMiddleware(thunk)
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

window.store = store;

const onStoreChange = () => {
    console.log('onStoreChange: ', store.getState());
}

store.subscribe(onStoreChange);

$(document).ready(() => {
    console.log('doc ready');

    $('#app').append(
        `<div>
            <h2>Recipes</h2>
            <button id="add">Add</button>
        </div>`
    );

    $('#add').on('click', () => {
        // console.log('add');
        // store.dispatch({ type: 'SOME_ACTION' });
        // addRecipe('jancsi');
        store.dispatch(addRecipe('Joel')); // using a thunk
    });

});

function addRecipe(title) {
    return function(dispatch, getState) { // return a function thunk will call it
        dispatch({ type: 'ADD_RECIPE_STARTED' });

        setTimeout(() => {
            dispatch({ type: 'ADD_RECIPE', title: title })
        }, 1000);
    }
}