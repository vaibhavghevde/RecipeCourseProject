import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from './../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  public set setIndex(v: number) {
    this.selectedRecipeIndex = v;
  }

  public get getIndex(): number {
    return this.selectedRecipeIndex;
  }

  selectedRecipeIndex: number = -1;
  private recipes: Recipe[] = [
    new Recipe(
      'Poori Bhaji',
      'Poori and batata bhaji',
      'https://lejnaskitchen.com/wp-content/uploads/2020/06/Screenshot_2020-06-08-00-16-40-69-02.jpeg',
      [
        new Ingredient('wheat', 2),
        new Ingredient('oil', 1),
        new Ingredient('potatoes', 5),
        new Ingredient('masala', 20),
      ]
    ),
    new Recipe(
      'Aaloo Paratha',
      'Aaloo Paratha',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2020/08/aloo-paratha-recipe.jpg',
      [
        new Ingredient('wheat', 2),
        new Ingredient('oil', 1),
        new Ingredient('potatoes', 5),
        new Ingredient('masala', 10),
      ]
    ),
    new Recipe(
      'Paani Poori',
      'Paani Poori',
      'https://static.toiimg.com/thumb/61048461.cms?imgsize=1981854&width=800&height=800',
      [
        new Ingredient('white peas', 3),
        new Ingredient('mint leaves', 250),
        new Ingredient('dates', 50),
        new Ingredient('poori packet', 2),
      ]
    ),
    new Recipe(
      'Bhel',
      'Bhel',
      'https://i2.wp.com/vegecravings.com/wp-content/uploads/2018/06/Bhel-Puri-Recipe-Step-By-Step-Instructions.jpg?fit=1972%2C1874&quality=65&strip=all&ssl=1',
      [
        new Ingredient('flat rice', 250),
        new Ingredient('shev', 250),
        new Ingredient('flat poori', 2),
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipesByIndex(index: number) {
    return this.recipes.slice()[index];
  }

  getRecipeIndex(name: string) {
    return this.recipes.find((x) => x.name === name);
  }
}
