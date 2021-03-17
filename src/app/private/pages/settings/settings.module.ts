import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SettingsPage } from './settings.page';
import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: SettingsPage }]),
    SettingsRoutingModule,
  ],
  declarations: [SettingsPage]
})
export class SettingsModule {}
