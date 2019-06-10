import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  constructor(public navCtrl: NavController) {
    this.msg='';
   }

  public msg :String;

  txtUsuario = '';
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

}
