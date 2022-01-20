import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tour, TourService } from '../tour.service';

@Component({
  selector: 'app-edit-tour',
  templateUrl: './edit-tour.component.html',
  styleUrls: ['./edit-tour.component.css'],
})
export class EditTourComponent implements OnInit {
  tourToEdit: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private tourService: TourService
  ) {}

  ngOnInit(): void {
    this.tourToEdit = {
      id: this.data.tour.id,
      name: this.data.tour.name,
      description: this.data.tour.description,
    };
  }

  finishEditing(form: NgForm): void {
    let editedTour = this.tourService.getTourById(this.tourToEdit.id);
    editedTour.name = this.tourToEdit.name;
    editedTour.description = this.tourToEdit.description;
  }
}
