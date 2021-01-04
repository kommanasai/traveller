import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserregisterPage } from './userregister';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    UserregisterPage,
  ],
  imports: [
    IonicPageModule.forChild(UserregisterPage),
    ComponentsModule
  ],
})
export class UserregisterPageModule {}
