import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Recipe } from './../recipe.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  subscription! : Subscription;
  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.recipeService.recipeChanged.subscribe((r: Recipe[]) => {
      this.recipes = r;
    });
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.recipeService.setIndex = -1;
    this.router.navigateByUrl('/recipes/new');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
