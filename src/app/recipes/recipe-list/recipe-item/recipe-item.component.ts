import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onClickItem() {

    // console.log('Item clicked ' + this.recipe.name);
    this.recipeService.recipeSelected.emit(this.recipe);
  }

  // getRecipeDetails(recipe: Recipe) {

  //  // console.log(recipe.name);
  // }

}
