import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollectCashPage } from './collect-cash';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CollectCashPage,
  ],
  imports: [
    IonicPageModule.forChild(CollectCashPage),
    ComponentsModule

  ],
})
export class CollectCashPageModule {}
