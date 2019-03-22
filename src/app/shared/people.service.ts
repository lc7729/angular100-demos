import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PeopleService {
  url = "http://localhost:3000/people";

  constructor(private http: HttpClient) {}

  getPeople() {
    this.http.get(this.url).subscribe(res => console.log(res));
  }
}
