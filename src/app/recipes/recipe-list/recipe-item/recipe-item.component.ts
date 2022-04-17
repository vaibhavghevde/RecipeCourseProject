import { Recipe } from './../../recipe.model';
import { Component, Input } from '@angular/core';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  constructor(private recipeService: RecipeService) {}
  @Input() recipe = new Recipe('', '', '', []);

  onSelected() {
    this.recipeService.selectedRecipe.emit(this.recipe);
  }
}
