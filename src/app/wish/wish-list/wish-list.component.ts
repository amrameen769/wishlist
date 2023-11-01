import { Component, Input } from '@angular/core';
import { WishItem } from 'src/shared/models/WishItem';
import { WishService } from '../wish.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent {
  @Input() wishes: WishItem[] = []
}
