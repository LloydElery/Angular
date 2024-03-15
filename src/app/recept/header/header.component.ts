import { Component } from '@angular/core';
import { ImgComponent } from '../img/img.component';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ImgComponent, DetailsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
