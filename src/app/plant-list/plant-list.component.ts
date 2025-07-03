import { Component } from '@angular/core';
import { Observable } from 'rxjs';
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
  cartList$: Observable<Plant[]>; 

  constructor (
    private cart: PlantCartService,
    private plantDataService: PlantDataService) {
      this.cartList$ = this.cart.cartList.asObservable();
  }

  ngOnInit(): void {
    this.plantDataService.getAll().subscribe(plants => this.plants = plants);
  }

  addToCart(plant: Plant): void {
    this.cart.addToCart(plant);
    plant.quantity = 0;
  }

  reloadPlants(): void {
    this.plantDataService.getAll().subscribe({
      next: (data) => this.plants = data,
      error: (err) => console.error('Error loading plants', err)
    });
  }

  availableStock(plant: Plant, cartList: Plant[]): number {
    const itemInCart = cartList.find(p => p.name === plant.name);
    return plant.stock - (itemInCart ? itemInCart.quantity : 0);
  }
}
