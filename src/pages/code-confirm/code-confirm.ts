import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the CodeConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-code-confirm',
  templateUrl: 'code-confirm.html',
})
export class CodeConfirmPage {
  pro_id: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private  menu:MenuController) {
  	this.pro_id = navParams.get('item');
  }
  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
   }
  ionViewDidLoad() {
    console.log(this.pro_id);
  }

}
