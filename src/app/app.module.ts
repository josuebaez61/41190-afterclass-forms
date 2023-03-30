import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EstudiantesModule } from './estudiantes/estudiantes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EstudiantesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
