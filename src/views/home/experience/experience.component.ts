import { Component, OnInit } from "@angular/core";
import { Experience, Experiences } from "./experience.model";
// start and end date icons, company icon
import {
  faCalendarAlt,
  faBuilding,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { ReplaySubject } from "rxjs";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
})
export class ExperienceComponent implements OnInit {
  public icons = {
    date: faCalendarAlt,
    location: faBuilding,
    arrowRight: faArrowRightLong,
    company: faBuilding,
  };
  public experiences = Experiences;
  public activeExperience$ = new ReplaySubject<Experience>();

  constructor() {}

  ngOnInit(): void {}
}
