import { Component, OnInit } from '@angular/core';  
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { DatosService } from '../../services/datos.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private router : Router,
    private datos : DatosService) { }

  opciones : Observable<any>;

  ngOnInit() {
    this.opciones = this.datos.getMenuOpciones();
  }
  
  goPage(path : String){
    this.router.navigate([path]);
  }

  setHeaderName(nameIn : String){
    // this.header.name=nameIn;
  }
}
