import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Welcome to {{title}}</h1>
          <p>The year is {{theYear}}</p>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular100-demos';
  isTrue = true;
  theYear = 2019;
}

