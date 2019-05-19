import store from './store';
import loadUI from './ui';
import { addRecipe, fetchRecipes } from './actions/recipes';
import { addIngredient } from './actions/ingredients';

loadUI();

// store.dispatch(addRecipe('Pancakes'));
// store.dispatch(addIngredient('Pancakes', 'Egg', 3));

store.dispatch(fetchRecipes());