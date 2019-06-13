import { Component, OnInit } from '@angular/core';
import { NavController, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  constructor(public navCtrl: NavController, private alertaCtrl: AlertController) {
    this.msg='';
   }

  public msg :String;

  txtUsuario  
  txtClave = '';
  txtCorreo = '';
  txtEdad = '';
  txtTelefono = '';

  ngOnInit() {
  }

  funActualizar(){
    this.msg = 'Creado'+ ' ' +
    ' Usuario: ' + this.txtUsuario + "\n" +
    ' Clave: ' + this.txtClave + ' ' +
    ' Correo: ' + this.txtCorreo + ' ' +
    ' Edad: ' + this.txtEdad + ' ' +
    ' Telefono ' + this.txtTelefono;
  }

  async muestraAlerta(){
    const mensajeAlert = await this.alertaCtrl.create({
      header: 'Alerta',
      subHeader: 'Subtitulo',
      message: 'Este es un mensaje de alerta',
      buttons: [
        {
          text: 'Aceptar',
          cssClass: 'secondary',
          handler:(blah) => {
            console.log('Aceptar' + blah);
          }

        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelar' + blah);
          }
        }
      ]
    });

    await mensajeAlert.present();
  }

}
