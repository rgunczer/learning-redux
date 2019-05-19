import store from './store';
import loadUI from './ui';
import { addRecipe } from './actions/recipes';
import { addIngredient } from './actions/ingredients';

loadUI();

store.dispatch(addRecipe('Pancakes'));
store.dispatch(addIngredient('Pancakes', 'Egg', 3));
