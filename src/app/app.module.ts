import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MenuComponent } from './menu/menu.component';
import { routesArray } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    UserProfileComponent,
    SignUpComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routesArray)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
