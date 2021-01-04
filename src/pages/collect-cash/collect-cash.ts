import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CollectCashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-collect-cash',
  templateUrl: 'collect-cash.html',
})
export class CollectCashPage {
  headerTitle:string;
Amount:number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.headerTitle="Collect Cash";

    console.log('ionViewDidLoad CollectCashPage');
  }
  sendPayment(){
    this.navCtrl.push("PaymentsuccessPage");
  }

}
