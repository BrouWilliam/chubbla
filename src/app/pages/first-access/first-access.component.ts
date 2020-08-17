import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateDocument } from 'src/app/shared/helpers/validateDocument';
import { ApiService } from 'src/app/core/services/api.service';
import { LoadingService } from 'src/app/shared/_loading/loading.service';
import { SnackbarService } from 'src/app/core/services/snackbar.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-first-access',
  templateUrl: './first-access.component.html',
  styleUrls: ['./first-access.component.scss']
})
export class FirstAccessComponent implements OnInit {

  firstAccessForm: FormGroup;
  nextStep: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private apiService: ApiService,
    private loadingService: LoadingService,
    private snackbarService: SnackbarService
  ) {
    this.nextStep = false;

    this.firstAccessForm = this.formBuilder.group({
      cpf: ['', [Validators.required, ValidateDocument]],
      email: ['', [Validators.required, Validators.email]],
    });
   }

   ngOnInit() {
    this.authService.logout();
  }

  get f() { return this.firstAccessForm.controls; }

  onSubmit() {
    if(this.firstAccessForm.invalid) {
      return;
    }

    this.loadingService.showLoading();
    this.apiService.firstAccess(this.f.cpf.value, this.f.email.value)
      .subscribe(
        data => {
          this.nextStep = true;
          this.loadingService.hideLoading();
        },
        error => {
          this.snackbarService.open(error.notification.message, 'Ok', true);
          this.loadingService.hideLoading();
        });
  }
}
