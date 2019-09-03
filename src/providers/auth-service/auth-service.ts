import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Headers, RequestOptions } from "@angular/http";
import { Http, Response } from "@angular/http";
import { Storage } from "@ionic/storage";
import "rxjs/add/operator/map";
import "rxjs/Rx";

export class User {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

@Injectable()
export class AuthServiceProvider {
  currentUser: User;
  constructor(private http: Http, private _storage: Storage) {}
  ps: string;

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        //Get Access
        var body = { email: credentials.email, password: credentials.password };
        let headers = new Headers({ "Content-Type": "application/json" });
        let opt = new RequestOptions({ headers: headers });
        let u;
        this.http
          .post("https://tmdt.tt2t.info/index.php/api/merchant/user", body, opt)
          .map(this.extractData)
          .subscribe(data => {
            this.ps = data.access;
            let access = data.access;
            this._storage
              .set("usr", credentials.email)
              .then(
                () => console.log("Storage"),
                error => console.error("error: ", error)
              );

            observer.next(access);
            observer.complete();
          });
      });
    }
  }
  private extractData(res: Response) {
    return res.text() ? res.json() : {};
  }
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public getUserInfo(): User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
