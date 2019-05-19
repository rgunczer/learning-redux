import { createStore } from 'redux';
import rootReducer from './reducers/root'

const initialState = {
    recipes: [ { name: 'Omelette '} ],
    ingredients: [ { recipe: 'Omelette', name: 'Egg', quantity: 2 } ]
};

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

export default store;