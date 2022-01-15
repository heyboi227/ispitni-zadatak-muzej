import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Exhibition, ExhibitionService } from '../exhibition.service';
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
    public userService: UserService
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

}
