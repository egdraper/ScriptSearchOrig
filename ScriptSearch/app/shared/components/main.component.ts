import { Component } from '@angular/core';
import { Router }    from '@angular/router';
import { SearchComponent} from '../../components/search.component'
import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
  selector: 'main',
  templateUrl: "app/shared/templates/main.component.html",
  styleUrls: ["app/shared/styles/main.component.css"],
  directives: [SearchComponent, ROUTER_DIRECTIVES]
})
export class MainComponent {

  constructor(private router: Router){

  }
}