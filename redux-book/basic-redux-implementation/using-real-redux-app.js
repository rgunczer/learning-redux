const initialState = {
    counter: 3
};

function reducer(state, action) {
    switch (action.type) {
        case 'INC':
            return Object.assign({}, state, { counter: state.counter + 1 });
        case 'DEC':
            return Object.assign({}, state, { counter: state.counter - 1 });
        default:
            return state;
    }
}

function updateView() {
    document.querySelector('#counter').innerHTML = store.getState().counter;
}

const store = Redux.createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(updateView);

updateView();

document.querySelector('#inc').onclick = () => store.dispatch({ type: 'INC' });
document.querySelector('#dec').onclick = () => store.dispatch({ type: 'DEC' });