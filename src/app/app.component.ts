import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
          <h1>Welcome to {{title}}</h1>
          <p>The year is {{theYear}}</p>
          <p>Next year is {{1 + theYear}}</p>
          <div [hidden]="isTrue">Is this hidden?</div>
          `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular100-demos';
  isTrue = true;
  theYear: number = 2019;

  constructor() {
    //this.theYear = new Date().getFullYear();
  }

}
