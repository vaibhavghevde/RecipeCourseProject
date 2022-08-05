import { Subscription } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Ingredient } from './../../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list.service';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromShoppingList from '../store/shopping-list.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  subscription: Subscription = new Subscription();
  editMode = false;
  editedIndex: number = -1;
  @ViewChild('f1') myForm!: NgForm;
  ingredient!: Ingredient;
  constructor(
    private shoppinglistService: ShoppinglistService,
    private store: Store<fromShoppingList.AppState>
  ) {}

  ngOnInit(): void {
    this.subscription = this.shoppinglistService.startedEditing.subscribe(
      (index) => {
        this.editMode = true;
        this.editedIndex = index;
        this.ingredient = this.shoppinglistService.getIngredient(index);
        this.myForm.setValue({
          name: this.ingredient.name,
          quantity: this.ingredient.quantity,
        });
      }
    );
  }

  addIngredient() {
    if (!this.editMode) {
      // this.shoppinglistService.setIngerdients(
      //   new Ingredient(this.myForm.value.name, this.myForm.value.quantity)
      // );
      this.store.dispatch(
        new ShoppingListActions.AddIngredient(
          new Ingredient(this.myForm.value.name, this.myForm.value.quantity)
        )
      );
    } else {
      // this.shoppinglistService.editIngredient(
      //   new Ingredient(this.myForm.value.name, this.myForm.value.quantity),
      //   this.editedIndex
      // );
      const ingr = new Ingredient(
        this.myForm.value.name,
        this.myForm.value.quantity
      );
      this.store.dispatch(
        new ShoppingListActions.UpdateIngredient({
          data: ingr,
          i: this.editedIndex,
        })
      );
    }
    this.clearForm();
  }

  onDelete() {
    // this.shoppinglistService.deleteIngredient(this.editedIndex);
    this.store.dispatch(
      new ShoppingListActions.DeleteIngredient(this.editedIndex)
    );
    this.clearForm();
  }

  clearForm() {
    this.editMode = false;
    this.editedIndex = -1;
    this.myForm.reset();
    console.log(this.myForm);
  }
}
