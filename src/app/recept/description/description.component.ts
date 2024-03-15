import { Component } from '@angular/core';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css',
})
export class DescriptionComponent {
  color = '';

  switchColor() {
    if (this.color != 'purple') {
      this.color = 'purple';
    } else {
      this.color = '';
    }
  }
}
