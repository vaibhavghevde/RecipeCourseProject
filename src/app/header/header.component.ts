import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private ds: DataStorageService) {}

  ngOnInit(): void {}

  onSaveData() {
    this.ds.saveRecipe();
  }

  onFetchData(){
    this.ds.fetchRecipes().subscribe();
  }
}
