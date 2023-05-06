import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  hide = false; // initial value
  
  onHideNavbar(hide: boolean) {
    this.hide = hide;
  }
}
