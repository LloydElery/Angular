import { Component } from '@angular/core';
import { ProfilePictureComponent } from '../profile-picture/profile-picture.component';
import { ProfileDetailsComponent } from '../profile-details/profile-details.component';

@Component({
  selector: 'app-header-section',
  standalone: true,
  imports: [ProfilePictureComponent, ProfileDetailsComponent],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.css',
})
export class HeaderSectionComponent {}
