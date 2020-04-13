import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  @Input() varFeatureSelected: string;
  selectedRecipe: Recipe;
  // @Output() recipeDetails: Recipe ;





  constructor() { }

  ngOnInit() {

  }
  getRecipeDetails(event: Recipe) {

  this.selectedRecipe = event;

  }








}
