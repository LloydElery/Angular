import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  user = {
    namn: 'Dennis',
    email: 'Den@den.den',
    status: 1,
  };
}
