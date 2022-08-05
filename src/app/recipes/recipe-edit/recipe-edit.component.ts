import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  id!: number;
  editMode = false;
  recipeForm!: UntypedFormGroup;

  get controls() {
    return (<UntypedFormArray>this.recipeForm.get('ingredients')).controls;
  }

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
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
    let recipeIngredients = new UntypedFormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipesByIndex(this.id);
      recipeName = recipe.name;
      recipeimageURL = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe.ingredients) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new UntypedFormGroup({
              name: new UntypedFormControl(ingredient.name, Validators.required),
              quantity: new UntypedFormControl(ingredient.quantity, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }

    this.recipeForm = new UntypedFormGroup({
      recipeName: new UntypedFormControl(recipeName, Validators.required),
      imageUrl: new UntypedFormControl(recipeimageURL, Validators.required),
      description: new UntypedFormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients,
    });
  }

  OnSubmit() {
    const newRecipe = new Recipe(
      this.recipeForm.value['recipeName'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imageUrl'],
      this.recipeForm.value['ingredients']
    );
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe);
    } else {
      this.recipeService.addRecipe(newRecipe);
    }

    this.onCancel();
  }

  onAddIngerdient() {
    (<UntypedFormArray>this.recipeForm.get('ingredients')).push(
      new UntypedFormGroup({
        name: new UntypedFormControl(null, Validators.required),
        quantity: new UntypedFormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  onDeleteIngerdient(i: number) {
    (<UntypedFormArray>this.recipeForm.get('ingredients')).removeAt(i);
  }

  onCancel() {
    if (this.editMode) {
      this.router.navigateByUrl('/recipes/' + this.id);
    } else {
      this.router.navigateByUrl('/recipes');
    }
  }
}
