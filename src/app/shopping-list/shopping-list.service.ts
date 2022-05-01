import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppinglistService {
  ingredientAdded = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(i: number) {
    return this.ingredients[i];
  }

  setIngerdients(data: Ingredient) {
    this.ingredients.push(data);
    this.ingredientAdded.next(this.ingredients.slice());
  }

  editIngredient(data: Ingredient, i: number) {
    this.ingredients[i].name = data.name;
    this.ingredients[i].quantity = data.quantity;
    this.ingredientAdded.next(this.ingredients.slice());
  }

  deleteIngredient(idx: number) {
    this.ingredients.splice(idx, 1);
    this.ingredientAdded.next(this.ingredients.slice());
  }
}
