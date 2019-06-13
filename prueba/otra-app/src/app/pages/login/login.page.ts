import { Component, OnInit } from '@angular/core';
import { NavController, AlertController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  image: String;
  txtUsuario: String;
  txtClave: String;

  constructor(private alertCtrl :AlertController,private router :Router) { 
    this.image = 'https://portalportuario.cl/wp-content/uploads/2015/05/aduanas02-300x198.jpg';
  }

  ngOnInit() {
  }

  validaUsuario(){
   
    if(this.txtUsuario=='admin' && this.txtClave=='123456'){
      this.router.navigate(['home']);
    }else{
      this.loginFail();
    }
  }

  async loginFail(){
    const mensajeAlert = await this.alertCtrl.create({
      header: 'Alerta',
      subHeader: 'Acceso Denegado',
      message: 'Usuario o contraseña Incorrecta',
      buttons: [
        {
          text: 'Aceptar',
          cssClass: 'secondary',
          handler:(blah) => {
            console.log('Aceptar' + blah);
          }

        // },
        // {
        //   text: 'Cancelar',
        //   role: 'cancel',
        //   cssClass: 'secondary',
        //   handler: (blah) => {
        //     console.log('Cancelar' + blah);
        //   }
         }
      ]
    });

    await mensajeAlert.present();
  }
}
