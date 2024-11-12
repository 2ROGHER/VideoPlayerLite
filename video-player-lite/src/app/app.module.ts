import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { CoreStoreModule } from './core/store';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundPageComponent,
    FavoritesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //directives
    //Pipes
    //Store
    CoreStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
