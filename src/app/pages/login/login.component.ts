import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoadingService } from 'src/app/shared/_loading/loading.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { SnackbarService } from 'src/app/core/services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private loadingService: LoadingService,
    private router: Router,
    private authService: AuthService,
    private snackbarService: SnackbarService
  ) {
    this.hide = true;

    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.authService.logout();
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.loadingService.showLoading();
    this.authService.login(this.f.login.value, this.f.password.value)
      .subscribe(
        data => {
          this.loadingService.hideLoading();
          if (data.notification.resetPassword) {
            this.router.navigate(['/changePassword']);
          } else {
            this.router.navigate(['/registerData']);
          }
        },
        error => {
          this.snackbarService.open(error.message, 'Ok', true);
          this.loadingService.hideLoading();
        });
  }
}
