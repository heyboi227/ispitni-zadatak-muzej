import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditTourComponent } from './edit-tour/edit-tour.component';
import { Exhibition, ExhibitionService } from './exhibition.service';

export interface Tour {
  id: number;
  code: string;
  content: Array<Exhibition>;
  name: string;
  description: string;
  totalPrice: number;
  status: 'Završen' | 'U toku' | 'Otkazan';
  rating: number;
}

@Injectable({
  providedIn: 'root',
})
export class TourService {
  tourOpened: boolean = false;
  tourList: Array<Tour> = [];

  constructor(
    public exhibitionService: ExhibitionService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  //Kreiranje novog obilaska
  addTour(
    code: string,
    content: Array<Exhibition>,
    name: string,
    description: string,
    totalPrice: number,
    status: any,
    rating: number
  ) {
    var maxId: number = 0;
    this.tourList.forEach((tour) => {
      if (maxId < tour.id) {
        maxId = tour.id;
      }
    });

    var id = ++maxId;

    var tour: Tour = {
      id,
      code,
      content,
      name,
      description,
      totalPrice,
      status,
      rating,
    };

    this.tourList.push(tour);

    this.router.navigate(['/planner']);
    this.exhibitionService.cartList.length = 0;
    this.exhibitionService.cartTotalPrice = 0;

    return tour;
  }

  getTours(): Tour[] {
    return this.tourList;
  }

  getTourById(id: number): Tour {
    var foundTour: Tour;
    this.tourList.forEach((tour) => {
      if (tour.id == id) {
        foundTour = tour;
      }
    });
    return foundTour;
  }

  //Završetak obilaska
  //izabrane postavke se brišu iz korpe
  completeTour(tour: Tour, list: Array<any>): void {
    tour.status = 'Završen';
    list.length = 0;
  }

  //Otkazivanje porudžbine
  cancelTour(tour: Tour, list: Array<any>): void {
    tour.status = 'Otkazan';
    list.length = 0;
  }

  editTour(tour: Tour): void {
    this.tourOpened = true;

    const profileDialog = this.dialog.open(EditTourComponent, {
      disableClose: true,
      width: '35vw',
      data: { tour: tour },
    });

    profileDialog.afterClosed().subscribe(() => {
      this.tourOpened = false;
    });
  }
}
