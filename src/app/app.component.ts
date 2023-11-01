import { Component, OnInit } from '@angular/core';
import { markdown } from 'src/shared/mock/markdown';
import { WishService } from './wish/wish.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Wishlist';
  markdownData = markdown;
}
