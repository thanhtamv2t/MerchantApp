import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProgramserviceProvider } from '../../providers/programservice/programservice';
/**
 * Generated class for the CodeListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-code-list',
  templateUrl: 'code-list.html',
})
export class CodeListPage {
	id_pro: any;
	data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private _service: ProgramserviceProvider) {
  		this.id_pro = navParams.get('id');
  		this._service.code_get(this.id_pro).subscribe(db=>{
  			this.data = db;
  		});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CodeListPage');
  }

}
