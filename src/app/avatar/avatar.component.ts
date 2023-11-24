import { Component } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  sequence,
} from '@angular/animations';

const DropDownAnimation = trigger("dropDownMenu", [
  transition(":enter", [
    style({ opacity: 0 }),
    sequence([
      animate("200ms", style({ opacity: 1 })),
    ])
  ]),

  transition(":leave", [
    style({ opacity: 1 }),
    sequence([
      animate("200ms", style({opacity: 0 }))
    ])
  ])
]);


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
