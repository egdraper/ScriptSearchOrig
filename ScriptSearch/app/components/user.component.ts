import { Component } from '@angular/core';
import { SideBarComponent} from "../shared/components/sidebar.component"
import { MainComponent} from "../shared/components/main.component"
import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
  selector: 'user',
  templateUrl: "app/templates/user.component.html",
  styleUrls: ["app/styles/user.component.css"],
  directives: [SideBarComponent, MainComponent]
})
export class UserComponent {}