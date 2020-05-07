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
    debugFlag = true;

    logging(message) {

      if (this.debugFlag) {



          console.log(message);

      }


    }


  addNewIngredients(ingredient: Ingredient[]) {

    this.ingredients.push(...ingredient);
    this.logging('Inside addNewIngredients');
    this.logging('Current Ingredients');
    // tslint:disable-next-line:prefer-const
    for ( let curLet of this.ingredients) {


      this.logging(curLet.name + '---' + curLet.amount);

    }
    this.changedIngredients.emit(this.ingredients.slice());
  }

  getIngredients() {

    return this.ingredients.slice();
  }

  constructor() { }


}
