import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  changedIngredients = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Banana', 12)
  ];

  addNewIngredients(ingredient: Ingredient) {

    this.ingredients.push(ingredient);
    this.changedIngredients.emit(this.ingredients.slice());
  }

  getIngredients() {

    return this.ingredients.slice();
  }

  constructor() { }


}
