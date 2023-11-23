import { Component } from '@angular/core';

type tabNames = "fav" | "recent"

@Component({
  selector: 'app-avatar-drop',
  templateUrl: './avatar-drop.component.html',
  styleUrls: ['./avatar-drop.component.scss']
})
export class AvatarDropComponent {
  currentTab: tabNames = "fav"
  favIcon = "assets/icons/fav.svg"
  recIcon = "assets/icons/recent.svg"

  switchTab(tabName: tabNames){
    if(this.currentTab !== tabName){
      this.currentTab = tabName
    }
  }

  getActiveTabClass(tabName: tabNames){
    return {
      'active': this.currentTab === tabName
    }
  }
}
