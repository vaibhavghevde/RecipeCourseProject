import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: AuthComponent }]),
    FormsModule,
    SharedModule,
  ],
})
export class AuthModule {}
