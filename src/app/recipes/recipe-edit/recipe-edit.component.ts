import { RecipeService } from './../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  id!: number;
  editMode = false;
  recipeForm!: FormGroup;

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.editMode = params['id'] !== undefined;
      this.id = +params['id'];
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeimageURL = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipesByIndex(this.id);
      recipeName = recipe.name;
      recipeimageURL = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe.ingredients) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              quantity: new FormControl(ingredient.quantity, [Validators.required, , Validators.pattern())]),
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      recipeName: new FormControl(recipeName, Validators.required),
      imageUrl: new FormControl(recipeimageURL, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients,
    });
  }

  OnSubmit() {
    console.log(this.recipeForm);
  }

  onAddIngerdient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(),
        quantity: new FormControl(),
      })
    );
  }
}
