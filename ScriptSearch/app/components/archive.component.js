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
var archive_service_1 = require("../services/archive.service");
var ArchiveComponent = (function () {
    function ArchiveComponent(_archiveDataService) {
        this._archiveDataService = _archiveDataService;
        this.data = {};
        this.updateList();
    }
    ArchiveComponent.prototype.onSubmit = function () {
        /* var mongodb = require('mongodb').MongoClient;*/
        this._archiveDataService.saveData(this.data);
        /*   var url = 'mongodb://localhost:27017/HamsterSearch'
           mongodb.connect(url, (err, db)=> {
               var collection = db.collection("archive");
               collection.insert(this.data, (err, results) => {
                   results.send(results)
                   db.close();
               })
           });*/
        this.updateList();
        this.data = {};
    };
    ArchiveComponent.prototype.updateList = function () {
        this.dataList = this._archiveDataService.getData();
    };
    ArchiveComponent = __decorate([
        core_1.Component({
            selector: 'archive',
            templateUrl: "app/templates/archive.component.html",
            styleUrls: ["app/styles/archive.component.css"],
            providers: [archive_service_1.ArchiveDataService]
        }), 
        __metadata('design:paramtypes', [archive_service_1.ArchiveDataService])
    ], ArchiveComponent);
    return ArchiveComponent;
}());
exports.ArchiveComponent = ArchiveComponent;
//# sourceMappingURL=archive.component.js.map