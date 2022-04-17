import { Ingredient } from './../../shared/ingredient.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  name = '';
  quantity = 0;

  constructor() {}

  ngOnInit(): void {
    this.name = '';
    this.quantity = 0;
  }

  addIngredient() {
    this.ingredientAdded.emit(new Ingredient(this.name, this.quantity));
  }
}
