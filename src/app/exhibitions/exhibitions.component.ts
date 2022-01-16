import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Exhibition, ExhibitionService } from '../exhibition.service';
import { RatingService } from '../rating.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['./exhibitions.component.css'],
})
export class ExhibitionsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  obs: Observable<any>;

  exhibitionSource = new MatTableDataSource<Exhibition>(
    this.exhibitionService.dummyExhibitionList
  );

  constructor(
    public exhibitionService: ExhibitionService,
    public userService: UserService,
    public ratingService: RatingService
  ) {}

  ngOnInit(): void {
    this.exhibitionSource.data = this.exhibitionService.getExhibitions();
    this.exhibitionService.sumParameters();
  }

  ngAfterViewInit(): void {
    this.exhibitionSource.paginator = this.paginator;
    this.obs = this.exhibitionSource.connect();
  }

  ngOnDestroy(): void {
    if (this.exhibitionSource) {
      this.exhibitionSource.disconnect();
    }
  }

  doFilter(filterValue: string): void {
    this.exhibitionSource.filter = filterValue.trim().toLowerCase();
  }
}
