import { createStore } from 'redux';

const reducer = (state, action) =>
	action.type === 'INC'
		? state + 1
		: state;

const initialState = 0;

const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => document.getElementById('counter').innerText = store.getState());

setInterval(() => store.dispatch({ type: 'INC' }), 500);

console.log("Redux started");