import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {
  BreakpointState,
  Breakpoints,
  BreakpointObserver,
} from '@angular/cdk/layout';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset
  );
  constructor(private breakpointObserver: BreakpointObserver) {}
}
