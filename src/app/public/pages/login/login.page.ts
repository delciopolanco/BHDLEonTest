import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage implements OnInit {

  public rememberUser: boolean;
  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    public toastController: ToastController) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  isInvalid(property: string): boolean {
    return this.loginForm.controls[property].invalid
      && (this.loginForm.controls[property].dirty
        || this.loginForm.controls[property].touched);
  }

  async sining() {
    try {
      await this.authService.login(this.loginForm.value).toPromise();
      this.loginForm.reset();
    } catch (error) {
      const toast = await this.toastController.create({
        position: 'top',
        message: 'Usuario y/o contraseña invalido',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    }
  }
}
