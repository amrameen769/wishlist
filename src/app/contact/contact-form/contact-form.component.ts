import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit{

  constructor () {}

  ngOnInit(): void {
      
  }

  senderName = new FormControl('');
  senderEmail = new FormControl('');
  senderMessage = new FormControl('');

}
