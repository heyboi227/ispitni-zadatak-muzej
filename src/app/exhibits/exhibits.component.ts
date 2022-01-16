import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Exhibition, ExhibitionService } from '../exhibition.service';
import { RatingService } from '../rating.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-exhibits',
  templateUrl: './exhibits.component.html',
  styleUrls: ['./exhibits.component.css']
})
export class ExhibitsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  exhibitionSource = new MatTableDataSource<Exhibition>(
    this.exhibitionService.userChosenExhibitions
  );

  constructor(
    public exhibitionService: ExhibitionService,
    public userService: UserService,
    private router: Router,
    public ratingService: RatingService
  ) { }

  ngOnInit(): void {
    this.exhibitionSource.data = this.exhibitionService.getUserChosenExhibitions();
  }

  ngAfterViewInit(): void {
    this.exhibitionSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    if (this.exhibitionSource) {
      this.exhibitionSource.disconnect();
    }
  }

  backToPlanner(): void {
    this.router.navigate(['/planner']);
  }

}
