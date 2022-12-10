import { Component, OnInit } from "@angular/core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
})
export class HeroComponent implements OnInit {
  public icons = {
    github: faGithub,
    linkedin: faLinkedin,
  };

  public heroButtons = [
    {
      icon: this.icons.github,
      link: "github.com/mdkelley02",
    },
    {
      icon: this.icons.linkedin,
      link: "https://www.linkedin.com/in/matthew-kelley-12b102184/",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
