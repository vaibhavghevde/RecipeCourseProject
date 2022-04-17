import { Recipe } from './../recipe.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Poori Bhaji',
      'Poori and batata bhaji',
      'https://lejnaskitchen.com/wp-content/uploads/2020/06/Screenshot_2020-06-08-00-16-40-69-02.jpeg'
    ),
    new Recipe(
      'Aaloo Paratha',
      'Aaloo Paratha',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2020/08/aloo-paratha-recipe.jpg'
    ),
    new Recipe(
      'Paani Poori',
      'Paani Poori',
      'https://static.toiimg.com/thumb/61048461.cms?imgsize=1981854&width=800&height=800'
    ),
    new Recipe(
      'Bhel',
      'Bhel',
      'https://i2.wp.com/vegecravings.com/wp-content/uploads/2018/06/Bhel-Puri-Recipe-Step-By-Step-Instructions.jpg?fit=1972%2C1874&quality=65&strip=all&ssl=1'
    ),
  ];
  @Output() recipeDetails = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit(): void {}

  showRecipeDetails(rd: Recipe) {
    this.recipeDetails.emit(
      new Recipe(
        rd.name,
        rd.description,
        rd.imagePath
      )
    );
  }
}
