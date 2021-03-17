import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import {  TransactionPageRoutingModule } from './transactions-routing.module';
import { TransactionPage } from './transactions.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TransactionPageRoutingModule
  ],
  declarations: [TransactionPage]
})
export class TransactionsModule {}
