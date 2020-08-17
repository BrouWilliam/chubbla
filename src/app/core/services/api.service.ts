import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  firstAccess(cpf: string, email: string) {
    
    return this.http.put<any>(environment.urlApi + `User/ChangePassword`, { cpf, email })
      .pipe(map(result => {
        return result;
      }));
  }
}
