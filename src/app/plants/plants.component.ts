import { Component, ViewChild } from '@angular/core';
import { PlantListComponent } from '../plant-list/plant-list.component';

@Component({
  selector: 'app-plants',
  standalone: false,
  templateUrl: './plants.component.html',
  styleUrl: './plants.component.scss'
})
export class PlantsComponent {
  @ViewChild(PlantListComponent) plantListComponent!: PlantListComponent;

  onFormSubmitted(): void {
    this.plantListComponent.reloadPlants();
  }
}
