import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {

    }

    senderName = new FormControl('');
    senderEmail = new FormControl('');
    senderMessage = new FormControl('');

    para = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit animi quia similique dolore ex aspernatur, atque hic sed culpa quasi illo labore voluptatibus eveniet ratione ab quisquam id! Fuga velit possimus dicta libero dolore, natus magnam iste eius itaque, aliquam quasi expedita corporis ullam? Repudiandae corporis nesciunt laborum, suscipit ipsum aut ipsa facere accusamus aspernatur. Similique facere fugit laboriosam corrupti fugiat labore corporis assumenda, ducimus ipsa aspernatur, minima temporibus vero perferendis pariatur recusandae laborum, ratione ea? Maxime dicta assumenda eligendi, iste vero minus temporibus eum expedita nam? Dolores animi cumque necessitatibus, cum magni ipsum error ea, sed explicabo commodi aspernatur rerum. Natus dicta odit architecto mollitia asperiores perspiciatis quaerat placeat accusantium tempora totam ipsum nobis, molestiae ratione laborum hic rerum facilis commodi unde amet modi earum. Eius ea pariatur tempora quis ullam. Repellat similique numquam beatae facilis excepturi incidunt sapiente est ratione modi! Placeat sint molestiae cum. Nostrum, dignissimos ipsam consequuntur fuga incidunt exercitationem quaerat ea amet, similique beatae officia sapiente tempore nulla mollitia et aperiam obcaecati praesentium excepturi id doloribus architecto! Nemo aperiam consequatur repudiandae eum harum. Quibusdam iste praesentium excepturi sequi quia est deleniti, vel provident non ipsam eius doloremque tenetur dolores quisquam! Saepe necessitatibus repellendus totam unde?'

}
