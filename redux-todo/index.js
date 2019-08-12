import { createStore, combineReducers } from 'redux';


function addTodo(text) {
    return {
        type: 'ADD',
        payload: text
    };
}

function todoReducer(state = [], action) {
    switch (action.type) {

        case 'ADD':
            return [...state, { name: action.payload, done: false }]

        case 'DEL':
            // console.log('dec');
            return state.filter(x => x.name !== action.payload);

        case 'DONE':
            return state.map(x => x.name === action.payload ? { ...x, done: true} : x);

        default:
            return state;

    }
    return state;
}

function itemsReducer(state = false, action) {
    switch(action.type) {
        case 'TOGGLE':
            return !state;
    }
    return state;
}

const rootReducer = combineReducers({
    todo: todoReducer,
    showItems: itemsReducer
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const html = `
    <div>
        <input type="text" id="text">
        <button id="add">Add</button>
        <button id="delete">Delete</button>
        <button id="done">Done</button>
        <button id="toggle">Toggle</button>
    </div>
`;

document.getElementById('app').innerHTML = html;


document.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {

        const txtElem = document.getElementById('text')
        const value = txtElem.value;
        console.log('value: ', value);

        console.log('click: ', event.target.id);

        switch (event.target.id) {
            case 'add':
                // store.dispatch({ type: 'ADD', payload: value });
                store.dispatch(addTodo(value));
                break;

            case 'delete':
                store.dispatch({ type: 'DEL', payload: value });
                break;

            case 'done':
                store.dispatch({ type: 'DONE', payload: value });
                break;

            case 'toggle':
                store.dispatch({ type: 'TOGGLE' });
                break;

        }

        txtElem.value = '';
        txtElem.focus();

    }
});


store.subscribe(onStoreUpdate);

function onStoreUpdate() {
    const state = store.getState();

    document.getElementById('out').innerText = JSON.stringify(state, null, 2);

    console.log('state: ', state);

    document.getElementById('list').innerHTML = '<ul>' +  state.todo.map(x => `<li>${x.name} ${x.done}</li>`).join('') + '</ul>';
}

onStoreUpdate();
