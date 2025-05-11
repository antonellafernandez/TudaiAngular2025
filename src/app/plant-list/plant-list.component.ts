import { Component } from '@angular/core';
import { Plant } from './plant';
import { PlantCartService } from '../plant-cart.service';
import { PlantDataService } from '../plant-data.service';

@Component({
  selector: 'app-plant-list',
  standalone: false,
  templateUrl: './plant-list.component.html',
  styleUrl: './plant-list.component.scss'
})
export class PlantListComponent {
  plants: Array<Plant> = [];

  constructor (
    private cart: PlantCartService,
    private plantDataService: PlantDataService) {
  }

  ngOnInit(): void {
    this.plantDataService.getAll().subscribe(plants => this.plants = plants);
  }

  addToCart(plant: Plant): void {
    this.cart.addToCart(plant);
    plant.stock -= plant.quantity;
    plant.quantity = 0;
  }
}
