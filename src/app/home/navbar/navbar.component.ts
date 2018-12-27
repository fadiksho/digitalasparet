import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavService } from '../../shared/nav.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isSideMenuOpen = false;
  constructor(private navService: NavService) { }

  ngOnInit() {
  }

  toggleSideBar() {
    this.navService.toggleSideMenu();
    this.isSideMenuOpen = this.navService.isSideMenuOpen;
  }
}
