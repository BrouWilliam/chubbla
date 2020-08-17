import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// FontAwesome
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons'; // Regular
import { fas } from '@fortawesome/free-solid-svg-icons'; // Solid

import { LoadingComponent } from './shared/_loading/loading.component';

// Components
import { LoginComponent } from './pages/login/login.component';
import { CoreModule } from './core/core.module';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { FirstAccessComponent } from './pages/first-access/first-access.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DocumentDirective } from './shared/directives/document.directive';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';


import {MatNativeDateModule} from '@angular/material/core';
import {DemoMaterialModule} from './material-module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    FirstAccessComponent,
    ChangePasswordComponent,
    LoadingComponent,
    DocumentDirective,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    CoreModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatNativeDateModule,
    DemoMaterialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(far, fas);
  }
}
