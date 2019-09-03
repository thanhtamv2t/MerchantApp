import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Storage } from '@ionic/storage';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
 constructor(private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController,private _storage:Storage) { } 

  loading: Loading;
  registerCredentials = { email: '', password: '' };
 
 ngOnInit(){
    this._storage.get('usr').then((val)=>{
      if(val != null)
      {
        this.nav.setRoot(ListPage);
      }
    });
 }

 
  public createAccount() {
    this.nav.push('RegisterPage');
  }
 
  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {    

        this.nav.setRoot(ListPage);
      } else {
        this.showError("Thông tin truy cập không hợp lệ");
      }
    },
      error => {
        this.showError(error);
      });
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Chờ chút thôi ...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Xảy ra lỗi',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
