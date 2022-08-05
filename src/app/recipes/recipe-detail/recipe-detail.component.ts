import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from './../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppinglistService } from './../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail = new Recipe('', '', '', []);
  id!: number;
  constructor(
    private recipeService: RecipeService,
    private slService: ShoppinglistService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.recipeDetail = this.recipeService.getRecipesByIndex(+params['id']);
      this.recipeService.setIndex = +params['id'];
      this.id = +params['id'];
    });
  }

  sendToShoppingList() {
    this.slService.setIngerdients(this.recipeDetail.ingredients);
  }

  onDeleteRecipe() {
    var del = confirm('Are you sure, you want to delete this recipe?');
    if (del) {
      this.recipeService.deleteRecipe(this.id);
      this.router.navigate(['/recipes']);
    }
  }
}
