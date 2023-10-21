import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @ViewChild('AvatarDropdown')
  _avatarDropdown!: ElementRef<HTMLDetailsElement>;
  Admin: boolean = true;
  loggedIn: string = this.Admin ? 'User' : 'Admin';
  ChangeUser() {
    this.Admin = !this.Admin;
    this.loggedIn = this.Admin ? 'User' : 'Admin';
  }
  print(x: any) {}
}
