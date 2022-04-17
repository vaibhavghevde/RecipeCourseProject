import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppinglistService {
  ingredientAdded = new EventEmitter<Ingredient[]>();
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
    this.ingredientAdded.emit(this.ingredients.slice());
  }
}
