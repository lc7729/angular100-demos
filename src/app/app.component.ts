import { Component, OnInit } from "@angular/core";
import { Person } from "./shared/models/person.model";

@Component({
  selector: "app-root",
  template: `
    <p [hidden]="isHidden">Is it hidden?</p>
    <img [src]="'assets/favicon.png'" />
  `
})
export class AppComponent implements OnInit {
  isHidden: boolean;
  person: Person;

  ngOnInit(): void {
    this.isHidden = false;

    setInterval(() => {
      this.isHidden = !this.isHidden;
    }, 1000);
  }
}
