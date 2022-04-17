import { Component, OnInit } from '@angular/core';

import { Ingredient } from './../../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  name = '';
  quantity = 0;

  constructor(private shoppinglistService: ShoppinglistService) {}

  ngOnInit(): void {
    this.name = '';
    this.quantity = 0;
  }

  addIngredient() {
    this.shoppinglistService.setIngerdients(
      new Ingredient(this.name, this.quantity)
    );
  }
}
