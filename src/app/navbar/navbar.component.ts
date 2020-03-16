import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  whereAreWe = "";
  constructor(
    public router: Router,
    public location: Location
  ) { }

  ngOnInit() {
    
    if (this.location.path().indexOf('home') > -1) {
      this.whereAreWe = "home";
    } else if (this.location.path().indexOf('projects') > -1){
      this.whereAreWe = "projects";
    } else if (this.location.path().indexOf('contact') > -1){
      this.whereAreWe = "contact";
    }
  }

  public onPageChange(path: string){
    if (path === 'home') {
      this.whereAreWe = "home";
    } else if (path === 'projects'){
      this.whereAreWe = "projects";
    } else if (path === 'contact'){
      this.whereAreWe = "contact";
    }
  }

}
