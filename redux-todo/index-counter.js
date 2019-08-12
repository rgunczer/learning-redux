/*
import { createStore } from 'redux';

console.log('here')

function reducer(state = 0, action) {
    switch (action.type) {

        case 'ADD':
            // console.log('add');
            return state + 1;
            break;

        case 'DEC':
            // console.log('dec');
            return state - 1;
            break;

    }
    return state;
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const html = `
    <div>
        <input type="text" id="text">
        <button id="inc">Inc</button>
        <button id="dec">Dec</button>
    </div>
`;

document.getElementById('app').innerHTML = html;


document.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        console.log('click: ', event.target.id);

        switch (event.target.id) {
            case 'inc':
                store.dispatch({ type: 'ADD' });
                break;

            case 'dec':
                store.dispatch({ type: 'DEC' });
                break;
        }

    }
});


store.subscribe(onStoreUpdate);

function onStoreUpdate() {
    const state = store.getState();

    document.getElementById('out').innerText = JSON.stringify(state, null, 2);

    console.log('state: ', state);
}

*/
