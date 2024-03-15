import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './recept/header/header.component';
import { DescriptionComponent } from './recept/description/description.component';
import { ProjectsComponent } from './recept/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    DescriptionComponent,
    ProjectsComponent,
  ],
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'codealong-angular';
}
