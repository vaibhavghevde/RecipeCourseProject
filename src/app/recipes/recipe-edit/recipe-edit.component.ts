import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  mode: string = 'New';
  edit: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['id'] !== undefined) {
        this.mode = 'Edit';
        this.edit = 'editing Id: ' + params['id'];
      } else {
        this.mode = 'New';
        this.edit = "";
      }
    });
  }
}
