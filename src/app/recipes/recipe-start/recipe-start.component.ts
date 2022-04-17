import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css'],
})
export class RecipeStartComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.setIndex = -1;
  }
}
