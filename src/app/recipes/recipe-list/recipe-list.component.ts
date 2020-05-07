import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];




  constructor( private recipeService: RecipeService,
               private router: Router,
               private route: ActivatedRoute,
               private shoppingService: ShoppingListService) { }

  ngOnInit() {

    this.recipes = this.recipeService.getRecipes();
  }

  onClickNewRecipe() {
    this.shoppingService.logging('Inside onClickNewRecipe');
    this.router.navigate(['/recipes', 'new' ], );
  }


}
