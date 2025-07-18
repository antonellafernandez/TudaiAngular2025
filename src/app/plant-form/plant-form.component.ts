import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Plant } from '../plant-list/plant';
import { PlantDataService } from '../plant-data.service';

@Component({
  selector: 'app-plant-form',
  standalone: false,
  templateUrl: './plant-form.component.html',
  styleUrls: ['./plant-form.component.scss']
})

export class PlantFormComponent {
  @Output() formSubmitted = new EventEmitter();

  formPlant = new FormGroup({
    name: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    price: new FormControl(0.01, [Validators.required, Validators.min(0.01)]),
    stock: new FormControl(0, [Validators.required, Validators.min(0)]),
    image: new FormControl("/assets/img/new-plant.webp"),
    clearance: new FormControl(false)
  });

  constructor(private plantService: PlantDataService) {}

  onSubmitPlant() {
    if (this.formPlant.valid) {
      const newPlant: Omit<Plant, 'id'> = this.formPlant.value as Omit<Plant, 'id'>;
      if (newPlant) {
        this.plantService.createPlant(newPlant as Plant).subscribe({
          next: (createdPlant) => {
            console.log('Plant has been created:', createdPlant);
            this.formPlant.reset({ clearance: false });
            this.formSubmitted.emit();
          },
          error: (err) => {
            console.error('Error creating Plant:', err);
          }
        });
      }
    }
  }
}
