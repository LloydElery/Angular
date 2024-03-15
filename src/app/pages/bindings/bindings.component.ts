import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  standalone: true,
  imports: [],
  templateUrl: './bindings.component.html',
  styleUrl: './bindings.component.css',
})
export class BindingsComponent {
  backgroundColor = '';

  switchColor() {
    if (this.backgroundColor != 'blue') {
      this.backgroundColor = 'blue';
    } else {
      this.backgroundColor = '';
    }
  }

  favoriteColor = '';
}
