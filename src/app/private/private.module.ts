import { NgModule } from '@angular/core';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivatePage } from './private.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    PrivateRoutingModule
  ],
  declarations: [PrivatePage]
})
export class PrivateModule {}
