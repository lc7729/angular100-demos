import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PeopleListComponent } from "./people-list.component";

const routes: Routes = [
  { path: "/people", component: PeopleListComponent },
  { path: "/people/:id", component: PersonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
