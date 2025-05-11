import { Component } from '@angular/core';
import { PlantCartService } from '../plant-cart.service';
import { Plant } from '../plant-list/plant';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartList$: Observable<Plant[]>;
  
  constructor(private cart: PlantCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }
}
