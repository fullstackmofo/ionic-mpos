import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MposProvider } from '../../providers/mpos/mpos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public device = "";

  constructor(public navCtrl: NavController, private mpos: MposProvider) {

  }


  scan() {
    this.mpos.scanQPos2Mode((data) => {

      console.log(data)

      this.device = data;

    }, (error) => {console.log(error)})
  }


  connect(name) {
    this.mpos.connectBluetoothDevice((data)=>{console.log(data)}, (error) => {console.log(error)}, true, name)
  }


  getDeviceList() {
    this.mpos.getDeviceList((data) => {console.log(data)}, (error) => {console.log(error)})
  }


  readCard() {
    this.mpos.doTrade((data) => {console.log(data)}, (error) => {console.log(error)}, 30)
  }


}
