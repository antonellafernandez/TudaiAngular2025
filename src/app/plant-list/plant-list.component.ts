import { Component } from '@angular/core';
import { Plant } from './plant';

@Component({
  selector: 'app-plant-list',
  standalone: false,
  templateUrl: './plant-list.component.html',
  styleUrl: './plant-list.component.scss'
})
export class PlantListComponent {
  plants: Array<Plant> = [
    {
      name: "Begonia 'Flamingo Queen'",
      type: "Begonias",
      price: 14.99,
      stock: 10,
      image: "assets/img/flamingo-queen.webp",
      clearance: false
    },
    {
      name: "Begonia 'Lady Vanderwilt'",
      type: "Begonias",
      price: 12.99,
      stock: 10,
      image: "assets/img/ladyvanderwilt.webp",
      clearance: false
    },
    {
      name: "Begonia natunaensis",
      type: "Begonias",
      price: 19.99,
      stock: 0,
      image: "assets/img/natunaensis.webp",
      clearance: false
    },
    {
      name:"Monstera siltepecana",
      type: "Monstera",
      price: 12.99,
      stock: 10,
      image: "assets/img/siltepecana.webp",
      clearance: true
    },
    {
      name:"Monstera deliciosa var. borsigiana",
      type: "Monstera",
      price: 34.99,
      stock: 10,
      image: "assets/img/borsigiana.webp",
      clearance: false
    },
    {
      name:"Monstera acacoyaguensis",
      type: "Monstera",
      price: 24.99,
      stock: 10,
      image: "assets/img/acacoyaguensis.webp",
      clearance: false
    },
    {
      name: "Peperomia albovittata 'Rana Verde'",
      type: "Peperomia",
      price: 12.99,
      stock: 10,
      image: "assets/img/rana-verde.webp",
      clearance: false
    },
    {
      name: "Peperomia velutina 'bicolor'",
      type: "Peperomia",
      price: 12.99,
      stock: 10,
      image: "assets/img/velutina.webp",
      clearance: false
    },
    {
      name: "Peperomia 'Silver Bandit'",
      type: "Peperomia",
      price: 12.99,
      stock: 0,
      image: "assets/img/silverbandit.webp",
      clearance: false
    }
  ];

  constructor () { }

}
