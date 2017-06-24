import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConectionPage } from './conection';

@NgModule({
  declarations: [
    ConectionPage,
  ],
  imports: [
    IonicPageModule.forChild(ConectionPage),
  ],
  exports: [
    ConectionPage
  ]
})
export class ConectionPageModule {}
