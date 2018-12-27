import { Injectable } from '@angular/core';
import { fromEvent, BehaviorSubject } from 'rxjs';
import { TransferState } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private innerWidth: number;
  private lgBreakPoint = 992;

  isSideMenuOpen = false;
  overSideMenuOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  pushSideMenuOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private readonly transferState: TransferState) {
    // this.innerWidth = window.innerWidth;
    // fromEvent(window, 'resize').subscribe(event => {
    //   this.innerWidth = window.innerWidth;
    //   this.overSideMenu();
    //   this.pushSideMenu();
    // });
  }

  toggleSideMenu() {
    this.isSideMenuOpen = !this.isSideMenuOpen;
    console.log('isMenuOpen: ' + this.isSideMenuOpen);
    this.overSideMenu();
    this.pushSideMenu();
  }

  private overSideMenu() {
    this.overSideMenuOpen$.next(
      this.isSideMenuOpen && this.innerWidth < this.lgBreakPoint
    );
  }

  private pushSideMenu() {
    this.pushSideMenuOpen$.next(
      this.isSideMenuOpen && this.innerWidth > this.lgBreakPoint
    );
  }
}
