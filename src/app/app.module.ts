import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonComponent } from './person/person.component';
import { PersonNameComponent } from './person-name/person-name.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  declarations: [AppComponent, PeopleListComponent, PersonComponent, PersonNameComponent, ProductListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
