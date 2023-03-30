import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent {

  estudianteForm: FormGroup;

  nombreControl = new FormControl('Nombre example');
  apellidoControl = new FormControl('Example Apellido');

  constructor() {
    this.estudianteForm = new FormGroup({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
    });
  }
}
