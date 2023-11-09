import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadcrumpsComponent } from '../breadcrumps/breadcrumps.component';



@NgModule({
  declarations: [
    ContactFormComponent,
    BreadcrumpsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ContactFormComponent
  ]
})
export class ContactModule { }
