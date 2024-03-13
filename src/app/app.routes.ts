import { Routes } from '@angular/router';
import { ProfilePictureComponent } from './pages/profile-picture/profile-picture.component';
import { ProfileDetailsComponent } from './pages/profile-details/profile-details.component';
import { ProfileDescriptionComponent } from './pages/profile-description/profile-description.component';
import { PreviousProjectsComponent } from './pages/previous-projects/previous-projects.component';

export const routes: Routes = [
  { path: 'profile-picture', component: ProfilePictureComponent },
  { path: 'profile-details', component: ProfileDetailsComponent },
  { path: 'profile-description', component: ProfileDescriptionComponent },
  { path: 'previous-projects', component: PreviousProjectsComponent },
];
