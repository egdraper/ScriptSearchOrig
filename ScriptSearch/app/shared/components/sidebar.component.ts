import { Component } from '@angular/core';
import { Router }    from '@angular/router';
import { MainComponent } from "./main.component"

@Component({
  selector: 'side-bar',
  templateUrl: "app/shared/templates/sidebar.component.html",
  styleUrls: ["app/shared/styles/sidebar.component.css"],
  directives: [MainComponent]

})
export class SideBarComponent {
  public isActive: boolean = false;
  public activeSearch: boolean = false;
  public activeArchive: boolean = false;
  public activeGenerate: boolean = false;

 constructor(private router: Router){

 }

  public onSearchClick() {   
      this.resetActiveButtons();
      this.activeSearch = true;      
      let link = ['user/search-page'];
      this.router.navigate(link);  
  }

  public onArchiveClick(){
      this.resetActiveButtons();
      this.activeArchive = true;
      let link = ['user/archive-page'];
      this.router.navigate(link);  
  }

  public onGenerateReport(){
      this.resetActiveButtons();
      this.activeGenerate = true;
      let link = ['user/home-page'];
      this.router.navigate(link);  
  }

  private resetActiveButtons(){
    this.activeSearch = false;
    this.activeGenerate = false;
    this.activeArchive = false;
  }

}