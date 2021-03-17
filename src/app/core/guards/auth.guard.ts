import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtService } from '../services/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private jwtService: JwtService, public router: Router) { }

  canActivate(): boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(['public/login']);
      return false;
    }

    return true;
  }


  public isAuthenticated(): boolean {
    const token = this.jwtService.getToken();
    return token ? true : false;
  }
}
