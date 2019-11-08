import { Injectable } from '@angular/core';
import {Plugin, Cordova, CordovaProperty, CordovaInstance, IonicNativePlugin} from '@ionic-native/core';

@Plugin( 
  {
    pluginName: "posPlugin",
    plugin: "posPlugin",
    pluginRef: "cordova.plugins.dspread_pos_plugin",
    repo: "https://github.com/fullstackmofo/Mpos.git",
    platforms: ["Android", "iOS"]
  }
)


@Injectable()
export class MposProvider {

  @Cordova()
  doTrade(success, error, timeout)
    {
      
    }

  @Cordova() 
  scanQPos2Mode(success, error) {

  }
  @Cordova()
  setCardTradeMode(): Promise<any> 
  {
      return;
  }
  @Cordova()
  getQposInfo(success, error) {}
  
  @Cordova()
  getQposId(success, error) {}

  @Cordova()
  connectBluetoothDevice(success, error, isConnect, bluetoothAddress) { }

  @Cordova() 
  getDeviceList(success, error){}
 
}
