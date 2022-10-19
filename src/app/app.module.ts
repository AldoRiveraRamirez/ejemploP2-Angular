import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"  ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './usuarios/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlumnosComponent } from './utl/alumnos/alumnos.component';
import { MainPageComponent } from './utl/main-page/main-page.component';
import { UtlModule} from './utl/utl.module';
import { MaterialModule } from './Material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    UtlModule, 
    ReactiveFormsModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
