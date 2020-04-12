import { Component } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myProject';
  varFeatureSelected = '';

  checkFeatureSelected(Feature: string ) {

    console.log('Inside App Module ' + Feature );
    this.varFeatureSelected = Feature ;
  }
}
