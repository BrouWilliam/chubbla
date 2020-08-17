import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  private durationInSeconds = 5;

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  // private config: MatSnackBarConfig = {
  //   panelClass: ['style-error'],
  //   duration: 3000,
  //   horizontalPosition: this.horizontalPosition,
  //   verticalPosition: this.verticalPosition
  // };

  open(message: string, action: string, isError: boolean) {
    this._snackBar.open(message, action, {
      panelClass: isError? ['snackbar-error'] : ['snackbar-success'],
      duration: this.durationInSeconds * 1000,
      horizontalPosition: isError? 'center' : 'end',
      verticalPosition: isError? 'bottom' : 'top'
    });
  }
}
