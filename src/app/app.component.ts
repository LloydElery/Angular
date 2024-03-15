import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderSectionComponent } from './pages/header-section/header-section.component';
import { ProfilePictureComponent } from './pages/profile-picture/profile-picture.component';
import { ProfileDetailsComponent } from './pages/profile-details/profile-details.component';
import { PreviousProjectsComponent } from './pages/previous-projects/previous-projects.component';
import { ProfileDescriptionComponent } from './pages/profile-description/profile-description.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HeaderSectionComponent,
    ProfilePictureComponent,
    ProfileDetailsComponent,
    ProfileDescriptionComponent,
    PreviousProjectsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular Miniprojekt';
}
