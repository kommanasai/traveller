import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import *  as AppConfig from '../../app/serverCalls';
import { Observable } from 'rxjs';

/**
 * Provider for services
*/
@Injectable()

/**
 * Manages all methods 
 */
export class AuthServiceProvider {

  /**
* Value of the cfg
*/
  cfg: any;

  /**
*  loads first when entering to the page 
*/
  constructor(public http: HttpClient) {
    this.cfg = AppConfig.cfg;
  }

  /**
* @returns sending post request to send sms
*/
  sendSms(smsObj): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.cfg.api, smsObj, httpOptions)
  }

  /**
*  @returns sending post request to check mobile number exist or not
*/
  checkNumber(numberObj): Observable<any> {
   
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
      })
    };
    let controllMethod=this.cfg.api+"/CheckLogin";
    return this.http.post(controllMethod, numberObj, httpOptions)
  }
  RegistrationUser(reqObj): Observable<any> {
   
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
      })
    };
    let controllMethod=this.cfg.api+"/AddUpdateUsers";
    return this.http.post(controllMethod, reqObj, httpOptions)
  }


}
