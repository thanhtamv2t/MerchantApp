import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IpagePage } from './ipage';

@NgModule({
  declarations: [
    IpagePage,
  ],
  imports: [
    IonicPageModule.forChild(IpagePage),
  ],
})
export class IpagePageModule {}
