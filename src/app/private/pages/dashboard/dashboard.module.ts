import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { DashboardPage } from './dashboard.page';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovementsComponent } from './components/movements/movements.component';
import { ProductComponent } from './components/product/product.component';
import { CardService } from './services/card.service';
import { CoreModule } from 'src/app/core/core.module';

const declarations = [
  ProductComponent,
  MovementsComponent,
  DashboardPage
];

const imports = [
  SharedModule,
  DashboardRoutingModule,
  CoreModule
];

const providers = [
  CardService
];


@NgModule({
  imports: [ ...imports],
  declarations: [...declarations],
  providers: [...providers]

})
export class DashboardPageModule {}
