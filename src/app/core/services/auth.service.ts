import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthToken } from '../../public/pages/login/models/auth-token';
import { Login } from '../../public/pages/login/models/login.model';
import { map } from 'rxjs/operators';
import { JwtService } from 'src/app/core/services/jwt.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static readonly URL = 'login';
  private api = '';

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private jwtService: JwtService) {
    this.api = environment.api;
  }

  public login(login: Login): Observable<AuthToken> {
    const url = `${this.api}${AuthService.URL}`;

    return this.httpClient.post<AuthToken>(url, login).pipe(
      map(data => {
        this.jwtService.setToken(data.token);
        this.router.navigate(['private/dashboard']);
        return data;
      })
    );
  }

  public logOut(): void {
    this.jwtService.destroyToken();
    this.router.navigate(['public/login']);
  }
}
