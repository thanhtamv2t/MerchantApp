import { Component } from '@angular/core';
import { NavController, NavParams,AlertController, LoadingController, Loading } from 'ionic-angular';
import { ProgramserviceProvider } from '../../providers/programservice/programservice';
import { Storage } from '@ionic/storage';
import { CodeConfirmPage } from '../code-confirm/code-confirm';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  ls: any;
  loading: Loading;
  initls:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public _service: ProgramserviceProvider,public _storage: Storage,public loadCtrl: LoadingController) {  

    this.showLoading();
    this._storage.get('usr').then((val)=>{
        console.log(val);

        this._service.get_program(val).subscribe(data=>{
          this.ls = data;
          this.initls = data;
        });
    });  

  }
  resetList(){
    this.ls = this.initls;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad IpagePage');
    this.loading.dismiss();
  }
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
  showLoading() {
    this.loading = this.loadCtrl.create({
      content: 'Chờ chút thôi ...',
    });
    this.loading.present();
  }
  itemClick()
  {
    alert('Console.Log');
  }
  //CodeConfirm
  codeConfirm(item)
  {
    this.navCtrl.push('CodeConfirmPage',{
      item: item
    });
  }
  qrConfirm(item)
  {
    this.navCtrl.push('ScannerPage',{
      item: item
    });
  }
  CustomerList(id)
  {
    this.navCtrl.push('CodeListPage',{
      id: id
    });
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.resetList();
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.ls = this.ls.filter((item) => {
        return (item.pro_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }  
}
