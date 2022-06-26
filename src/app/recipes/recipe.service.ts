import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from './../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor() {}

  recipeChanged = new Subject<Recipe[]>();

  public set setIndex(v: number) {
    this.selectedRecipeIndex = v;
  }

  public get getIndex(): number {
    return this.selectedRecipeIndex;
  }

  selectedRecipeIndex: number = -1;
  private recipes: Recipe[] = [];
  // [
  //   new Recipe(
  //     'Poori Bhaji',
  //     'Poori and batata bhaji',
  //     'assets/images/poori-bhaji.jpg',
  //     [
  //       new Ingredient('wheat', 2),
  //       new Ingredient('oil', 1),
  //       new Ingredient('potatoes', 5),
  //       new Ingredient('masala', 20),
  //     ]
  //   ),
  //   new Recipe(
  //     'Aaloo Paratha',
  //     'Aaloo Paratha',
  //     'assets/images/aloo-paratha.jpg',
  //     [
  //       new Ingredient('wheat', 2),
  //       new Ingredient('oil', 1),
  //       new Ingredient('potatoes', 5),
  //       new Ingredient('masala', 10),
  //     ]
  //   ),
  //   new Recipe('Paani Poori', 'Paani Poori', 'assets/images/paani-poori.webp', [
  //     new Ingredient('white peas', 3),
  //     new Ingredient('mint leaves', 250),
  //     new Ingredient('dates', 50),
  //     new Ingredient('poori packet', 2),
  //   ]),
  //   new Recipe('Bhel', 'Bhel', 'assets/images/bhel-puri.webp', [
  //     new Ingredient('puffed rice', 250),
  //     new Ingredient('shev', 250),
  //     new Ingredient('flat poori', 2),
  //   ]),
  // ];

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipesByIndex(index: number) {
    return this.recipes.slice()[index];
  }

  getRecipeIndex(name: string) {
    return this.recipes.find((x) => x.name === name);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
