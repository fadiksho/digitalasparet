import { Component, OnInit } from '@angular/core';
import { NavService } from '../../shared/nav.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  openSideMenu = false;
  constructor(private navService: NavService) { }

  ngOnInit() {
    this.navService.pushSideMenuOpen$.subscribe(value => {
      this.openSideMenu = value;
    });
  }
}
