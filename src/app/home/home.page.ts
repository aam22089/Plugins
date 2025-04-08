import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { Camera, CameraResultType } from '@capacitor/camera'
import { Network } from '@capacitor/network';
import { Geolocation } from '@capacitor/geolocation';
import { from } from 'rxjs';
import { Clipboard } from '@capacitor/clipboard';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  constructor() { }

  takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
    });

    console.log(image.dataUrl);
  }

  logCurrentNetworkStatus = async () => {
    const status = await Network.getStatus();
    console.log('Network status: ', status);
  }

  getLocation = async () => {
    const location = await Geolocation.getCurrentPosition();
    console.log('Current location: ', location);
  }

  write = async () => {
    await Clipboard.write({
      string: "Task"
    })
  }

  check = async () => {
    const { type, value } = await Clipboard.read();

    console.log(`Got ${type} from clipboard: ${value}`)
  }


}
