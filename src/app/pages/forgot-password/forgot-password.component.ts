import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateDocument } from 'src/app/shared/helpers/validateDocument';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.forgotPasswordForm = this.formBuilder.group({
      cpf: ['', [Validators.required, ValidateDocument]],
      email: ['', [Validators.required, Validators.email]],
    });
   }

  ngOnInit() {
  }

  get f() { return this.forgotPasswordForm.controls; }

  onSubmit() {

  }
}
