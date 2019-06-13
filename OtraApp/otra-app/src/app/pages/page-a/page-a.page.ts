import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { DatosService } from '../../services/datos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.page.html',
  styleUrls: ['./page-a.page.scss'],
})
export class PageAPage implements OnInit {

  public namePage = 'Page-A';

  usuarios : Observable<any>;

  constructor(private lectura: DatosService) { }

  ngOnInit() {
    this.usuarios = this.lectura.getUser();
  }

}
