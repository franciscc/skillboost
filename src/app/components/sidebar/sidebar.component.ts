import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  hide = false;
  
  @Output() hideNavbar = new EventEmitter<boolean>();

  onHideNavbar() {
    this.hide = !this.hide;
    this.hideNavbar.emit(this.hide);
  }

}
