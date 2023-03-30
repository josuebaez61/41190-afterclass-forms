import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent {

  estudianteForm: FormGroup;

  // NOMBRE CONTROL
  nombreControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.minLength(3),
    ]
  );


  apellidoControl = new FormControl('Example Apellido');
  emailControl = new FormControl('example@email.com');

  constructor() {
    this.estudianteForm = new FormGroup({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      email: this.emailControl,
    });
  }

  onSubmit(): void {

    if (this.estudianteForm.valid) {
      console.log(this.estudianteForm.value)
    } else {
      alert('No es valido');
    }

    // console.log(this.estudianteForm.value);
  }
}
