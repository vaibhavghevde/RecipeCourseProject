import { RecipeService } from './../recipes/recipe.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuthenticated = false;
  constructor(
    private ds: DataStorageService,
    private authService: AuthService,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
      console.log(this.isAuthenticated);
    });
  }

  onSaveData() {
    const recipes = this.recipeService.getRecipes();
    if (recipes.length === 0) {
      var msg = confirm('Are you sure?');
      if (!msg) {
        return;
      }
    }
    this.ds.saveRecipe();
  }

  onFetchData() {
    this.ds.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
