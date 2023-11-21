import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public Admin: boolean = true;
  public loggedIn: string = this.Admin ? 'User' : 'Admin';
  public ChangeUser() {
    this.Admin = !this.Admin;
    this.loggedIn = this.Admin ? 'User' : 'Admin';
  }
}
