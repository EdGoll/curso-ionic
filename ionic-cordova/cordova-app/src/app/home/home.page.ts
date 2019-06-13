import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  image : String;

  constructor(private cam : Camera) {}

  tomarFoto(){

    const optionCam: CameraOptions = {
      quality: 100,
      destinationType: this.cam.DestinationType.DATA_URL,
      encodingType: this.cam.EncodingType.JPEG,
      mediaType: this.cam.MediaType.PICTURE,
      sourceType: this.cam.PictureSourceType.CAMERA
    };

    this.cam.getPicture(optionCam)
      .then((imageData) => {
        this.image = 'data:image/jpeg;base64' + imageData;
      },(err) => {
        console.log(err);
      });
  }


}
