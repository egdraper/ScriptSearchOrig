import { Component } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'top-bar',
  templateUrl: "app/shared/templates/topbar.component.html",
  styleUrls: ["app/shared/styles/topbar.component.css"]
})
export class TopBarComponent {

  constructor(private router: Router){

  }
  public goAdmin(){   
    let link = ['admin'];
      this.router.navigate(link); 
  }

  public goUser() {
    let link = ['user/search-page'];
      this.router.navigate(link); 
  }
}