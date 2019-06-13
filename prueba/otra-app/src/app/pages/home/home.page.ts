import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public msg :String;

  public namePage = 'Home';

  constructor(private router : Router) {
    this.msg='';
  }

  ngOnInit() {
  }

  goPage(){
    this.router.navigate(['page-c/forms']);
  }


}
