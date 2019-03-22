import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable({
  providedIn: "root"
})
export class PeopleService {
  constructor(logger: LoggingService) {}
}
