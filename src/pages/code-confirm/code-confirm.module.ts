import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CodeConfirmPage } from './code-confirm';

@NgModule({
  declarations: [
    CodeConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(CodeConfirmPage),
  ],
})
export class CodeConfirmPageModule {}
