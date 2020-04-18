import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;


  constructor(private shoppingListService: ShoppingListService ) { }

  ngOnInit() {
  }

  onAddClicked(ingredient: Ingredient) {

    const ingName = this.nameInputRef.nativeElement.value;
    const imgAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, imgAmount );
    // this.ingredientAdded.emit(newIngredient);
    this.shoppingListService.addNewIngredients(newIngredient);


  }

}
