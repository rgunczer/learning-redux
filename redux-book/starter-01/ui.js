import $ from 'jquery';
import store from './store';

function updateUI() {
    const { recipes } = store.getState();
    const renderRecipe = (recipe) => `<li>${ recipe.name }</li>`;

    $('.recipes > ul').html(recipes.map(renderRecipe));
}

export default function loadUI() {
    $('#app').append(`
        <div class="recipes">
            <h2>Recipes:</h2>
            <ul></ul>
        </div>
    `);

    store.subscribe(updateUI);

    updateUI();
}