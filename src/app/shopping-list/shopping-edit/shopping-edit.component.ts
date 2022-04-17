import { Component, OnInit, ViewChild } from '@angular/core';

import { Ingredient } from './../../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f1') myForm!: NgForm;
  name = '';
  quantity = 0;

  constructor(private shoppinglistService: ShoppinglistService) {}

  ngOnInit(): void {
  }

  addIngredient() {
    this.shoppinglistService.setIngerdients(
      new Ingredient(this.myForm.value.name, this.myForm.value.quantity)
    );
  }

  clearForm(){
    this.myForm.reset();
  }
}
