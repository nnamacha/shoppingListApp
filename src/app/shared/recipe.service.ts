import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from './ingredient.model';

// TODO Checking the service should application wide
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [

    new Recipe('First Recipe', 'Test Recipe', 'https://c.pxhere.com/images/15/3d/9ee477ee62341b9480ce314b02f8-1417897.jpg!d',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Cheese', 4)
    ]),
    // tslint:disable-next-line:max-line-length
    new Recipe('Second Recipe', 'Recipe Number Two', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Chilli', 4)
    ])
  ];

  getRecipes() {

    return this.recipes.slice();

  }
  constructor() { }
}
