import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';

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

  constructor(private store: Store<fromShoppingList.AppState>) {}

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(i: number) {
    return this.ingredients[i];
  }

  setIngerdients(data: Ingredient[]) {
    // this.ingredients.push(data);
    // this.ingredientAdded.next(this.ingredients.slice());
    this.store.dispatch(new ShoppingListActions.AddIngredients(data));
  }

  editIngredient(data: Ingredient, i: number) {
    // this.ingredients[i].name = data.name;
    // this.ingredients[i].quantity = data.quantity;
    // this.ingredientAdded.next(this.ingredients.slice());
    this.store.dispatch(
      new ShoppingListActions.UpdateIngredient({ data: data, i: i })
    );
  }

  deleteIngredient(idx: number) {
    // this.ingredients.splice(idx, 1);
    // this.ingredientAdded.next(this.ingredients.slice());
    this.store.dispatch(new ShoppingListActions.DeleteIngredient(idx));
  }
}
