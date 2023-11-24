import { Component } from '@angular/core';
import { DropDownAnimation } from '../animations/animations';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  animations: [DropDownAnimation]
})
export class AvatarComponent {
  userIcon: string = "assets/icons/user-profile.svg"
  showMenu: boolean = false

  toggleMenu() {
    this.showMenu = !this.showMenu
  }

  clickedOutside(): void {
    this.showMenu = false;
  }
}
