let state = {
    counter: 3
};
const listeners = [];

function reducer(state, action) {
    switch (action) {
        case 'INC':
            return Object.assign({}, state, { counter: state.counter + 1 });
        case 'DEC':
            return Object.assign({}, state, { counter: state.counter - 1 });
        default:
            return state;
    }
}

function dispatch(action) {
    console.log('dispatch: ', action);

    const newState = reducer(state, action);

    if (newState !== state) {
        state = newState;
    }

    listeners.forEach(listener => listener());
}

function subscribe(callback) {
    console.log('subscribe');
    listeners.push(callback);
}

function updateView() {
    document.querySelector('#counter').innerHTML = state.counter;
}

document.querySelector('#inc').onclick = () => dispatch('INC');
document.querySelector('#dec').onclick = () => dispatch('DEC');

subscribe(updateView);
dispatch(null);