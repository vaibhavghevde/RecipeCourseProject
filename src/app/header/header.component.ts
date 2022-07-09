import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  private userSub!: Subscription;
  isAuthenticated = false;
  constructor(
    private ds: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  onSaveData() {
    this.ds.saveRecipe();
  }

  onFetchData() {
    this.ds.fetchRecipes().subscribe();
  }
}
