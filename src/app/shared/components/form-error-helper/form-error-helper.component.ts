import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-error-helper',
  templateUrl: './form-error-helper.component.html',
  styleUrls: ['./form-error-helper.component.css']
})
export class FormErrorHelperComponent {

  @Input()
  formErrors: ValidationErrors | null = null;
}
