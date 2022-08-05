import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ShoppinglistService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
}) //, OnDestroy
export class ShoppingListComponent implements OnInit {
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  //private shoppingSub = new Subscription();
  constructor(
    private shoppinglistService: ShoppinglistService,
    private store: Store<fromShoppingList.AppState>
  ) {}

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.shoppinglistService.getIngredients();
    // this.shoppingSub = this.shoppinglistService.ingredientAdded.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
  }

  // ngOnDestroy(): void {
  //   this.shoppingSub.unsubscribe();
  // }

  onDelete(idx: number) {
    this.shoppinglistService.deleteIngredient(idx);
  }

  OnEditItem(i: number) {
    this.shoppinglistService.startedEditing.next(i);
  }
}
