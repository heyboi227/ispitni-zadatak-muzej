import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
  providedIn: 'root'
})
export class TourService {

  tourList: Array<Tour> = [];

  constructor(public exhibitionService: ExhibitionService, private router: Router) {
  }

  //Kreiranje novog obilaska
  addTour(code: string, content: Array<Exhibition>, name: string, description: string, totalPrice: number, status: any, rating: number) {
    var maxId: number = 0;
    this.tourList.forEach(tour => {
      if (maxId < tour.id) {
        maxId = tour.id;
      }
    });

    var id = ++maxId;

    var tour: Tour = { id, code, content, name, description, totalPrice, status, rating };

    this.tourList.push(tour);

    this.router.navigate(['/planner']);
    this.exhibitionService.cartList.length = 0;
    this.exhibitionService.cartTotalPrice = 0;

    return tour;
  }

  getTours(): Tour[] {
    return this.tourList;
  }

  //Završetak obilaska
  //izabrane postavke se brišu iz korpe
  completeTour(tour: Tour, list: Array<any>): void {
    tour.status = "Završen";
    list.length = 0;
  }

  //Otkazivanje porudžbine
  cancelTour(tour: Tour, list: Array<any>): void {
    tour.status = "Otkazan";
    list.length = 0;
  }
}
