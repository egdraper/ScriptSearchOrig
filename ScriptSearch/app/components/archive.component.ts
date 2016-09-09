import { Component } from '@angular/core';
import { ArchiveDataService } from "../services/archive.service"

@Component({
    selector: 'archive',
    templateUrl: "app/templates/archive.component.html",
    styleUrls: ["app/styles/archive.component.css"],
    providers: [ArchiveDataService]
})
export class ArchiveComponent {
    public data: IArchiveData = {};
    public dataList: IArchiveData[];


   constructor(private _archiveDataService: ArchiveDataService){
     this.updateList();
     
   }
    
    public onSubmit() {
       /* var mongodb = require('mongodb').MongoClient;*/
        this._archiveDataService.saveData(this.data)
     /*   var url = 'mongodb://localhost:27017/HamsterSearch'
        mongodb.connect(url, (err, db)=> {
            var collection = db.collection("archive");
            collection.insert(this.data, (err, results) => {
                results.send(results)
                db.close();
            })
        });*/
        this.updateList()
        this.data = {}; 
    }

    private updateList(){   
        this.dataList = this._archiveDataService.getData();
    }

     
}

