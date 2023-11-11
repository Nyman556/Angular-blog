import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  Admin: boolean = true;
  loggedIn: string = this.Admin ? 'User' : 'Admin';
  ChangeUser() {
    this.Admin = !this.Admin;
    this.loggedIn = this.Admin ? 'User' : 'Admin';
  }
}
