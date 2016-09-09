import { Injectable }     from '@angular/core';

@Injectable()
export class ArchiveDataService {

   
    private dataList: IArchiveData[] = [];



    constructor() {

    }

    saveData(data: IArchiveData) {
        this.dataList.push(data)
    }

    getData(){
        return this.dataList
    }

    getQuoteByName(name:string){
        //todo
    }
}

