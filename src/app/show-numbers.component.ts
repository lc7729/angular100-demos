import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-show-numbers",
  template: `
    <p>{{ numbers }}</p>
  `
})
export class ShowNumbersComponent implements OnInit {
  numbers: number[];

  ngOnInit(): void {
    this.numbers = [1, 2, 3];

    const timerId = setInterval(() => {
      //UPDATES SCREEN
      // this.numbers = [...this.numbers, Math.floor(Math.random() * 10)];

      //DOES NOT UPDATE SCREEN
      this.numbers.push(Math.floor(Math.random() * 10));

      console.log(this.numbers);
    }, 1000);

    setTimeout(() => {
      clearInterval(timerId);
    }, 4000);
  }
}
