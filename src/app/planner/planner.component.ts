import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';
import { Exhibition, ExhibitionService } from '../exhibition.service';
import { Tour, TourService } from '../tour.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit {

  displayedColumns = ['name', 'status', 'description', 'price', 'actions', 'rating'];
  tourSource = new MatTableDataSource<Tour>();

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(StarRatingComponent) rating: StarRatingComponent;

  constructor(public tourService: TourService, public userService: UserService, public exhibitionService: ExhibitionService, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.tourSource.data = this.tourService.getTours();
  }

  ngAfterViewInit(): void {
    this.tourSource.paginator = this.paginator;
    this.tourSource.sort = this.sort;
  }

  doFilter(filterValue: string): void {
    this.tourSource.filter = filterValue.trim().toLowerCase();
  }

  //Ocena pojedinačne porudžbine
  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }, tour: Tour): void {
    tour.rating = $event.newValue;
  }

  //Brisanje porudžbine iz evidencije
  deleteTour(tour: Tour): void {
    var tourIndex = this.tourService.tourList.indexOf(tour);
    this.tourService.tourList.splice(tourIndex, 1);
    this.ngOnInit();
  }

  viewExhibits(tour: Tour): void {
    this.exhibitionService.userChosenExhibitions = [];
    tour.content.forEach(ex => {
      this.exhibitionService.userChosenExhibitions.push(ex);
    });
    this.router.navigate(['/view-exhibits']);
  }

}
