import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private asCtrl: ActionSheetController) { }

  ngOnInit() {
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
