"use strict";
var router_1 = require('@angular/router');
var search_component_1 = require("./components/search.component");
var home_component_1 = require("./components/home.component");
var archive_component_1 = require("./components/archive.component");
var admin_component_1 = require("./components/admin.component");
var user_component_1 = require("./components/user.component");
var routes = [
    {
        path: "admin",
        component: admin_component_1.AdminComponent,
    },
    {
        path: "user",
        component: user_component_1.UserComponent,
        children: [
            {
                path: 'search-page',
                component: search_component_1.SearchComponent
            }, {
                path: "",
                component: home_component_1.HomeComponent
            }, {
                path: "home-page",
                component: home_component_1.HomeComponent,
            }, {
                path: "archive-page",
                component: archive_component_1.ArchiveComponent
            },
        ]
    },
    {
        path: "user2",
        component: user_component_1.UserComponent,
        outlet: "super"
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map