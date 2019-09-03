import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';


/**
 * Generated class for the QrscanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qrscan',
  templateUrl: 'qrscan.html',
})
export class QrscanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public qrScanner: QRScanner) { }

  scan()
  {
  	alert("CLGTN");
  }
  ionViewDidLoad() {
  		console.log("logged");
  }

}
