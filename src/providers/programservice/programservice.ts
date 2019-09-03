import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class ProgramserviceProvider {

  base_url: string = "https://tmdt.tt2t.info/index.php/";
  constructor(public http: HttpClient,public _http: Http) {
    console.log('Hello ProgramserviceProvider Provider');
  }

  public get_program(email)
  {
  		var url_get = this.base_url+"api/Merchant/program?email="+email;
  		return this.http.get(url_get);
  }
  public code_confirm(code,id_pro)
  {
  		return this.http.post(this.base_url+"api/Merchant/coupon",{ code: code, id_program: id_pro });
  }
  public code_get(id_pro)
  {
    return this.http.get(this.base_url+"api/Merchant/coupon?id_program="+id_pro);
  }
}
