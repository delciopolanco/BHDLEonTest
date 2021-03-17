import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  public getToken(): string {
    const token = localStorage.getItem('token');

    return token;
  }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public destroyToken(): void {
    localStorage.removeItem('token');
  }
}
