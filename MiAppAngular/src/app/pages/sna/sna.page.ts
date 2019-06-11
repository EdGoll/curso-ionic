import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sna',
  templateUrl: './sna.page.html',
  styleUrls: ['./sna.page.scss'],
})
export class SnaPage implements OnInit {

  image: String;

  constructor() { 
    this.image = 'https://portalportuario.cl/wp-content/uploads/2015/05/aduanas02-300x198.jpg';
  }

  ngOnInit() {
  }

}
