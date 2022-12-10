import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import {
  faCalendarAlt,
  faCircle,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { Experience } from "src/views/home/experience/experience.model";

@Component({
  selector: "app-experience-modal",
  templateUrl: "./experience-modal.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceModalComponent {
  public icons = {
    bullet: faCircle,
    calendar: faCalendarAlt,
    arrowRight: faX,
  };

  @Input() public experience: Experience;
}
