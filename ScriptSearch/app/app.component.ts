import { Component } from '@angular/core';
import { TopBarComponent} from "./shared/components/topbar.component"
import { AdminComponent } from "./components/admin.component"
import { UserComponent } from "./components/user.component"
import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
           <top-bar></top-bar>
           <router-outlet></router-outlet>  
            `,

   directives: [TopBarComponent, AdminComponent, UserComponent,  ROUTER_DIRECTIVES]
})
export class AppComponent {
     
  
}