"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var TopBarComponent = (function () {
    function TopBarComponent(router) {
        this.router = router;
    }
    TopBarComponent.prototype.goAdmin = function () {
        var link = ['admin'];
        this.router.navigate(link);
    };
    TopBarComponent.prototype.goUser = function () {
        var link = ['user/search-page'];
        this.router.navigate(link);
    };
    TopBarComponent = __decorate([
        core_1.Component({
            selector: 'top-bar',
            templateUrl: "app/shared/templates/topbar.component.html",
            styleUrls: ["app/shared/styles/topbar.component.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], TopBarComponent);
    return TopBarComponent;
}());
exports.TopBarComponent = TopBarComponent;
//# sourceMappingURL=topbar.component.js.map