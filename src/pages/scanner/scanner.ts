import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ProgramserviceProvider } from '../../providers/programservice/programservice';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the ScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html',
})
export class ScannerPage {

  ListCustomer: any;
  Data: any;
  pro_id: any;
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams,private barcodeScanner: BarcodeScanner,private _service: ProgramserviceProvider,public alertCtrl: AlertController) {
    this.barcodeScanner.scan().then((barcodeData) => {
      this.Data = barcodeData;
      this.pro_id = navParams.get('item');
       let loader = this.loadingCtrl.create({content: "Đang xử lý..."});
      this._service.code_confirm(barcodeData.text,this.pro_id).subscribe(data=>{
          loader.dismiss();        
          if(data){
            this.showAlert("Quét hoàn tất","Xác nhận thành công!");
          }else
          {
            this.showAlert("Quét hoàn tất","Mã đã sử dụng hoặc không tồn tại!");
          }

          this.navCtrl.pop();
      });      

      
  }, (err) => {
      // An error occurred
  });
  }
  showAlert(title,content) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: content,
      buttons: ['OK']
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ScannerPage');
  }

  scan(){
      this._service.code_confirm("26gV2i6SH5A01",1).subscribe(data=>{
          alert(JSON.stringify(data));
      });     
  }

}
