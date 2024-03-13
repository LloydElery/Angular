import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule], //tillåter oss att använda en [(two-way data binding)] -> myMessage
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  selectedColor = 'background-color=yellow';

  user = {
    name: 'Dennis',
    email: 'Dennis@dennis.se',
  };

  typeOfInput = 'number';

  myMessage = '';

  selectColor() {
    if (this.selectedColor == 'red') {
      this.selectedColor = 'yellow';
    } else {
      this.selectedColor = 'red';
    }
  }
}
