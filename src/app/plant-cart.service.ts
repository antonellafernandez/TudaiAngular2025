import { Injectable } from '@angular/core';
import { Plant } from './plant-list/plant';
import { BehaviorSubject } from 'rxjs';

// Handles the cart logic
@Injectable({
  providedIn: 'root'
})
export class PlantCartService {
  private _cartList: Plant[] = [];
  cartList: BehaviorSubject<Plant[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(plant: Plant) {
    let item = this._cartList.find((v1) => v1.name === plant.name);

    if(!item) {
      this._cartList.push({... plant});
    } else {
      item.quantity += plant.quantity;
    }

    console.log(this._cartList);
    this.cartList.next(this._cartList); // Equivalente al emit de eventos
  }
}
