import { Component } from '@angular/core';

@Component({
  selector: 'app-products', // Skrivs ut genom "<app-products></app-products>" i önskad html fil
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  data = [
    { recept: 'recept1', ingredienser: 5, description: 'Gör såhär.....' },
    { recept: 'recept2', ingredienser: 3, description: 'Gör såhär........' },
    { recept: 'recept3', ingredienser: 8, description: 'Gör såhär...........' },
  ];
}
