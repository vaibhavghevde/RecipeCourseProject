import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppinglistService {
  ingredientAdded = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  setIngerdients(data: Ingredient) {
    const obj = this.ingredients.find((e) => e.name === data.name);
    if (obj === undefined) {
      this.ingredients.push(data);
    } else {
      this.ingredients[
        this.ingredients.findIndex((e) => e.name === data.name)
      ].quantity += data.quantity;
    }
    this.ingredientAdded.next(this.ingredients.slice());
  }
}
