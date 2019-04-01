import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit {
  @Input()
  name: string;

  constructor() { }

  ngOnInit() {
  }

}
