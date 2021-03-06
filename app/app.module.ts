import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { GridViewModule } from 'nativescript-grid-view/angular';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { SoundsService } from './sounds/shared/sounds.service';

import { SoundsComponent } from './sounds/sounds.component'

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    GridViewModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SoundsComponent,
  ],
  providers: [
    SoundsService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {
}
