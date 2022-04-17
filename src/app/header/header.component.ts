import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() selectMenu = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onRecipeClick() {
    this.selectMenu.emit("recipe");
  }
  onShoppingListClick(){
    this.selectMenu.emit("shoppingList")
  }
}
