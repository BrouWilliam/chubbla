import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Details } from 'src/app/shared/interfaces/user';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _currentUserSubject: BehaviorSubject<Details>;
  public currentUser: Observable<Details>;

  constructor(private http: HttpClient) {
    this._currentUserSubject = new BehaviorSubject<Details>(JSON.parse(localStorage.getItem('icatuCurrentUser')));
    this.currentUser = this._currentUserSubject.asObservable();
  }

  public get currentUserValue(): Details {
    return this._currentUserSubject.value;
  }

  // --- Methods ---
  login(cpf: string, password: string) {
    return this.http.post<any>(environment.urlApi + `Authentication/login`, { cpf, password })
      .pipe(map(result => {
        localStorage.setItem('icatuCurrentUser', JSON.stringify(result.details));
        this._currentUserSubject.next(result.details);
        return result;
      }));
  }

  logout() {
    this._currentUserSubject.next(null);
    localStorage.removeItem('icatuCurrentUser');
    localStorage.clear();
  }
}
