import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { shoppingListReducer } from './shopping-list/store/shopping-list.reducer';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({ shoppingList: shoppingListReducer }),
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
