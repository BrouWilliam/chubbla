import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/shared/helpers/mustMatch';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;
  registeredPassword: boolean;
  hideP1: boolean;
  hideP2: boolean;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.hideP1 =  true;
    this.hideP2 =  true;
    this.registeredPassword = false;

    this.changePasswordForm = this.formBuilder.group({
      password: ['', [
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,}')
      ]],
      passwordTwo: ['', [
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,}')
      ]],
    }, {
      validator: MustMatch('password', 'passwordTwo')
    });
  }

  ngOnInit() {
  }

  get f() { return this.changePasswordForm.controls; }

  onSubmit() {

  }
}
