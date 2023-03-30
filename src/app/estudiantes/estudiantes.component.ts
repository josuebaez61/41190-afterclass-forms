import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent {

  estudiantes: any[] = [];

  estudianteForm: FormGroup;

  // NOMBRE CONTROL
  nombreControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.minLength(3),
      this.noHomeroValidator(),
    ]
  );


  apellidoControl = new FormControl('', [
    Validators.required,
  ]);


  emailControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  constructor() {
    this.estudianteForm = new FormGroup({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      email: this.emailControl,
    });
  }

  onSubmit(): void {
    if (this.estudianteForm.valid) {
      this.estudiantes.push(this.estudianteForm.value);
      this.estudianteForm.reset();
    } else {
      this.estudianteForm.markAllAsTouched()
    }
  }


  noHomeroValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value?.toLowerCase().includes('homero')) {
        return {
          noHomero: true
        }
      }
      return null;
    }
  }
}
