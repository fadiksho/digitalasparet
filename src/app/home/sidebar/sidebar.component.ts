import { Component, OnInit, Input, HostListener } from '@angular/core';
import { NavService } from '../../shared/nav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  openSideMenu = false;

  constructor(private navService: NavService) { }

  ngOnInit() {
    this.navService.overSideMenuOpen$.subscribe(value => {
      this.openSideMenu = value;
    });
  }
}
