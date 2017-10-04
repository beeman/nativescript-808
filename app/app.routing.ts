import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { SoundsComponent } from "./sounds/sounds.component";

const routes: Routes = [
  { path: '', redirectTo: '/sounds', pathMatch: 'full' },
  { path: 'sounds', component: SoundsComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }