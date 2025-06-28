import { JsonPipe, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  @Output() formSubmitted = new EventEmitter();

  // FormGroup
  formSignUp = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email], []),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', []),
  }, [this.isMismatch]);

  
  private isMismatch(control: AbstractControl): ValidationErrors | null {
    // Si no coinciden, devuelver el objeto ValidationErrors
    if (control.get('password')?.value !== control.get('confirmPassword')?.value) {
      return  { passwordMismatch: true };
    }

    return null
  };

  setDefaultValues() {
    this.formSignUp.setValue({
      username: 'admin',
      email: 'admin@email.com',
      password: '123456',
      confirmPassword: '123456'
    });
  }

  onSubmit() {
    if (this.formSignUp.valid) {
      console.log(this.formSignUp.value);
      this.formSubmitted.emit(this.formSignUp.value);
    }
  }
}
