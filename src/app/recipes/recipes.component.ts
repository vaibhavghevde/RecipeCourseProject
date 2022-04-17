import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  setRecipeDetails(rdc: RecipeDetailComponent, data: Recipe) {
    rdc.recipeDetail = data;
  }
}