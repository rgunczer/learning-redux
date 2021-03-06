import $ from 'jquery';
import { createStore } from 'redux';

const initialState = {
    recipes: [],
    ingredients: []
};

const reducer = (state, action) => state

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
        store.dispatch({ type: 'SOME_ACTION' });
    });

});