import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { LayoutRoutingModule } from "./layout-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainLayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class LayoutModule {}
