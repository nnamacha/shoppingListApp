import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../shared/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  @Input() varFeatureSelected: string;
  selectedRecipe: Recipe;






  constructor(private recipeService: RecipeService ) { }

  ngOnInit() {

    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });

  }
  getRecipeDetails(event: Recipe) {

  this.selectedRecipe = event;

  }








}
