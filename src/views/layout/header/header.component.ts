import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { tap } from "rxjs";
import { ThemeService } from "src/services/theme/theme.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  public darkModeForm = new FormGroup({
    darkMode: new FormControl(this.themeService.darkMode),
  });

  constructor(private themeService: ThemeService) {
    const darkMode$ = this.darkModeForm.valueChanges.pipe(
      tap((value) => {
        if (value.darkMode == null) {
          return;
        }
        this.themeService.darkMode = value.darkMode;
      })
    );
    darkMode$.subscribe();
  }
}
