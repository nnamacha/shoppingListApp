import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

   @Input() recipeDetails: Recipe;

   ingredients: Ingredient[] ;
  constructor(private shoppingListSer: ShoppingListService) { }

  ngOnInit() {}

  sendToShoppingList() {


  this.shoppingListSer.addNewIngredientfromSL(this.recipeDetails.ingredients) ;

  }






}
