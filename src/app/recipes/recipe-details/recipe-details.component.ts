import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

   @Input() recipeDetails: Recipe;
  // lclRecipeDetails: Recipe;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {}

  addToShoppingList() {
      this.shoppingListService.addNewIngredients(this.recipeDetails.ingredients);
  }






}
