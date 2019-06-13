import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-b',
  templateUrl: './page-b.page.html',
  styleUrls: ['./page-b.page.scss'],
})
export class PageBPage implements OnInit {

  public namePage = 'Page-B';

  usuarios : Observable<any>;

  constructor(private lectura: DatosService) { }

  ngOnInit() {
    this.usuarios = this.lectura.getAll();
  }

}
