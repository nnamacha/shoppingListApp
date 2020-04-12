import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  @Input() varFeatureSelected: string;

  lclFeatureSelected = '' ;
  constructor() { }

  ngOnInit() {

    this.setLocalVariables();
  }

  setLocalVariables(){

  this.lclFeatureSelected = this.varFeatureSelected ;
  console.log('intiate ' + this.lclFeatureSelected);
  }

}
