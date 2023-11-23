import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  userIcon: string = "assets/icons/user-profile.svg"
  showMenu: boolean = false

  toggleMenu() {
    this.showMenu = !this.showMenu
  }
}
