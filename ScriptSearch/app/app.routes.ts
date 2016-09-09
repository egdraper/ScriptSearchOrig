import { provideRouter, RouterConfig } from '@angular/router';
import { SearchComponent} from "./components/search.component";
import { HomeComponent } from "./components/home.component";
import { ArchiveComponent } from "./components/archive.component";
import { AdminComponent }  from "./components/admin.component";
import { UserComponent }  from "./components/user.component";

const routes: RouterConfig = [
    {
        path: "admin",
        component: AdminComponent,

    }, 
    {
        path: "user",
        component: UserComponent,
        children: [
            {
                path: 'search-page',
                component: SearchComponent
            }, {
                path: "",
                component: HomeComponent
            }, {
                path: "home-page",
                component: HomeComponent,
            }, {
                path: "archive-page",
                component: ArchiveComponent
            },
        ]
    },
    {
        path: "user2",
        component: UserComponent,
        outlet: "super"
    }
]

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
]