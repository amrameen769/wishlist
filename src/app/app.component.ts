import {Component} from '@angular/core';
import {markdown} from 'src/shared/mock/markdown';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Wishlist';
    markdownData = markdown;
}
