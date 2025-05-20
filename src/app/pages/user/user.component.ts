import { Component } from '@angular/core';
import { DeliveryFormComponent } from "../../components/delivery-form/delivery-form.component";

@Component({
  selector: 'app-user',
  imports: [DeliveryFormComponent],
    standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
