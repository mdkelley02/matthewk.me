import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainLayoutComponent } from "./main-layout/main-layout.component";

const ROUTES: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("../home/home.module").then((m) => m.HomeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
