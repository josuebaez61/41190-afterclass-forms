import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudiantesComponent } from './estudiantes.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EstudiantesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    EstudiantesComponent
  ]
})
export class EstudiantesModule { }
