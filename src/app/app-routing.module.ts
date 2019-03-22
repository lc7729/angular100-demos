import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PeopleListComponent } from "./people-list.component";
import { PersonDetailComponent } from "./person/person-detail.component";
import { ProductListComponent } from "./products/product-list/product-list.component";

const routes: Routes = [
  { path: "people", component: PeopleListComponent },
  { path: "products", component: ProductListComponent },
  { path: "people/:id", component: PersonDetailComponent },
  // { path: "people/moo", component: PersonDetailComponent },
  { path: "", redirectTo: "/people", pathMatch: "full" },
  { path: "**", redirectTo: "/people" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
