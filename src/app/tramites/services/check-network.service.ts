import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';

@Injectable({
  providedIn: 'root'
})
export class CheckNetworkService {

  constructor() {
    this.initializeNetworkListener();
  }

  initializeNetworkListener() {
    Network.addListener('networkStatusChange', status => {
      console.log('Network status changed', status);
    });


  }

  async getCurrentNetworkStatus() {
    const status = await Network.getStatus();
    console.log('Current network status:', status);
    return status;
  }
}
