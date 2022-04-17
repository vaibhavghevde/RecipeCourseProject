import {
  Component,
  Input,
  OnInit,
  DoCheck,
} from '@angular/core';

import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit, DoCheck {
  @Input() recipe = new Recipe('', '', '', []);
  @Input() index: number = -1;
  isSelected: boolean = false;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.isSelected = this.index === this.recipeService.getIndex;
  }
}
