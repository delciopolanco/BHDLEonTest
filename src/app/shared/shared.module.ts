import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';

const imports = [
  IonicModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule
];

const components = [
  HeaderComponent,
  SideMenuComponent
];

@NgModule({
  imports: [...imports],
  declarations: [...components],
  exports: [...components, ...imports]
})
export class SharedModule { }
