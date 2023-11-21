import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public Admin: boolean = true;
  public ChangeUser() {
    this.Admin = !this.Admin;
  }
}
