import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { PublicPage } from './public.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    PublicRoutingModule,
    SharedModule
  ],
  declarations: [PublicPage]
})
export class PublicModule {}
