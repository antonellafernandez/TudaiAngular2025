import { Component } from '@angular/core';

@Component({
  selector: 'app-plant-list',
  standalone: false,
  templateUrl: './plant-list.component.html',
  styleUrl: './plant-list.component.scss'
})
export class PlantListComponent {
  plant1 = {
    "name": "Begonia 'Flamingo Queen'",
    "type": "Begonias",
    "price": "$14.99",
    "stock": "10",
    "image": "/assets/img/begoniaceae-begonia-flamingo-queen.webp"
  }

  constructor () { }

}
