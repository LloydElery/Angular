import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  standalone: true,
  imports: [],
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.css',
})
export class ProfileDetailsComponent {
  name = 'Dennis Jensen';
  age = 31;
  edu = 'Chas Academy';
  program = 'Fullstack Webbdeveloper | Open Source';
}
