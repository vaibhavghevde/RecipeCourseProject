import { ShoppinglistService } from './../../shopping-list/shopping-list.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail = new Recipe('', '', '', []);
  constructor(
    private recipeService: RecipeService,
    private slService: ShoppinglistService
  ) {}

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe((recipe: Recipe) => {
      this.recipeDetail = recipe;
    });
  }

  sendToShoppingList() {
    this.recipeDetail.ingredients.forEach((e) => {
      this.slService.setIngerdients(e);
    });
  }
}
