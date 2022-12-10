import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LayoutModule } from "src/views/layout/layout.module";

@Component({
  selector: "app-root",
  template: `<router-outlet></router-outlet>`,
})
export class AppRoot {}

@NgModule({
  declarations: [AppRoot],
  bootstrap: [AppRoot],
  imports: [
    // @angular
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),

    // internal
    LayoutModule,
  ],
})
export class AppModule {}
