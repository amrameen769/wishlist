import {Component, EventEmitter, Output} from '@angular/core';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
 searchParam: string
 @Output() searchEvent = new EventEmitter<string>()

 onSubmit(event: any){
  this.searchEvent.emit(this.searchParam)
 }
}
