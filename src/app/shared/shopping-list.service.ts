import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  changedIngredients = new EventEmitter<Ingredient[]>();
  numberOfIngredients = new EventEmitter<number>();
  private ingredients: Ingredient[] = [];


  addNewIngredients(ingredient: Ingredient) {

    this.ingredients.push(ingredient);
    this.changedIngredients.emit(this.ingredients.slice());
  }

  addNewIngredientfromSL(ingredient: Ingredient[]) {

    this.ingredients.push(...ingredient);
    this.changedIngredients.emit(this.ingredients.slice());
  }

  getIngredients() {

    return this.ingredients.slice();
  }

  constructor() { }


}
