// import { Injectable, ChangeDetectorRef } from '@angular/core';
// import { fromEvent, BehaviorSubject } from 'rxjs';
// import { TransferState } from '@angular/platform-browser';
// import {MediaMatcher} from '@angular/cdk/layout';

// @Injectable({
//   providedIn: 'root'
// })
// export class NavService {

//   mobileQuery: MediaQueryList;

//   private _mobileQueryListener: () => void;

//   constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
//     this.mobileQuery = media.matchMedia('(max-width: 600px)');
//     this._mobileQueryListener = () => changeDetectorRef.detectChanges();
//     this.mobileQuery.addListener(this._mobileQueryListener);
//   }
// }
