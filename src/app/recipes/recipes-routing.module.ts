import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGaurdService } from '../auth/auth.gaurd';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesResolverSercvice } from './recipes-resolver.service';
import { RecipesComponent } from './recipes.component';

const routes = [
  {
    path: '',
    component: RecipesComponent,
    canActivate: [AuthGaurdService],
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipesResolverSercvice],
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipesResolverSercvice],
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
