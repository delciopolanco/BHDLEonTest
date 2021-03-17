import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { LoginPage } from './login.page';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginModule {}
