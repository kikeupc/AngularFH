import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/service/validators.service';
//import * as customValidator from 'src/app/shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.pattern( this.validatorsService.firstNameAndLastnamePattern )  ]],
    // email: ['', [ Validators.required, Validators.pattern( this.validatorsService.emailPattern ) ], [ new EmailValidator() ]], // Se comentarea para dejarla como referencia Video 252. Validaciones asíncronas 9:13
    email: ['', [ Validators.required, Validators.pattern( this.validatorsService.emailPattern ) ], [ this.emailValidator ]],
    userName: ['', [ Validators.required, this.validatorsService.cantBeStrider ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required ]],
  },{
    validators: [
      this.validatorsService.isFieldOneEqualFieldTwo('password', 'password2')
    ]
  })

  constructor( 
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidator
    ){}

  isValidField( field: string ){
     return this.validatorsService.isValiedField( this.myForm, field );
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }

}
