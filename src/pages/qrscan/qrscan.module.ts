import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrscanPage } from './qrscan';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@NgModule({
  declarations: [
    QrscanPage,
  ],
  imports: [
    IonicPageModule.forChild(QrscanPage),
  ],
})
export class QrscanPageModule {}
