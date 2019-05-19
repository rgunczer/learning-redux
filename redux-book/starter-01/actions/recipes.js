import { ADD_RECIPE } from '../constants/actionTypes';

export const addRecipe = (name) => ({
    type: ADD_RECIPE, name
});