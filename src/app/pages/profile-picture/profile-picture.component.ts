import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-profile-picture',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div>
      <img src="../assets/img/bild.jpg" alt="Profile picture" />
    </div>
  `,
  styleUrl: './profile-picture.component.css',
})
export class ProfilePictureComponent {}
