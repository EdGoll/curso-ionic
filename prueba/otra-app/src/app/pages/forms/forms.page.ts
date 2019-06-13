import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {


  msg = '';
  txtNomProducto = '';
  txtPrecioProducto = '';
  txtStock = '';

  constructor(private alertaCtrl: AlertController, private asCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  funActualizar(){
    this.msg = 'Creado'+ ' ' +
    ' Nombre : ' + this.txtNomProducto + "\n" +
    ' Precio Unitario : ' + this.txtPrecioProducto + ' ' +
    ' Stock Inicial: ' + this.txtStock + ' ' ;
    this.muestraAlerta();
  }

  async muestraAlerta(){
    const mensajeAlert = await this.alertaCtrl.create({
      header: 'Alerta',
      subHeader: 'Subtitulo',
      message: this.msg ,
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


  async muestraHojaAccion(){
    const hojaAccion = await this.asCtrl.create(
      {
        header: 'Opciones',
        backdropDismiss: false,
        buttons:[
          {
            text: 'Insertar',
            role: 'destructive',
            icon: 'alarm',
            handler: () => {
              console.log('Agregar Selecciomado');
            }
          },
          {
            text: 'Horizontal',
            icon: 'phone-landscape',
            handler: () => {
              console.log('Agregar Selecciomado');
            }
          },
          {
            text: 'Cancelar',
            icon: 'cancel',
            handler: () => {
              console.log('Agregar Selecciomado');
            }
        }
      ]
      }
    );
    await hojaAccion.present();
  }


}
