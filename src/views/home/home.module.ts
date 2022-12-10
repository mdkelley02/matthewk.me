import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import { HeroComponent } from "./hero/hero.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ExperienceComponent } from "./experience/experience.component";
import { EducationComponent } from "./education/education.component";
import { ExperienceModalComponent } from "./experience/experience-modal/experience-modal.component";

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    ExperienceComponent,
    EducationComponent,
    ExperienceModalComponent,
  ],
  imports: [
    CommonModule,
    // @fortawesome/angular-fontawesome
    FontAwesomeModule,
    RouterModule.forChild([{ path: "", component: HomeComponent }]),
  ],
})
export class HomeModule {}
