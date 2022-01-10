import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Exhibition, ExhibitionService } from '../exhibition.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-common-exhibitions',
  templateUrl: './common-exhibitions.component.html',
  styleUrls: ['./common-exhibitions.component.css']
})





export class CommonExhibitionsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  obs: Observable<any>;

  exhibitionSource = new MatTableDataSource<Exhibition>(this.exhibitionService.dummyExhibitionList);

  constructor(public exhibitionService: ExhibitionService, public userService: UserService) { }


  ngOnInit(): void {
    this.exhibitionSource.data = this.exhibitionService.getPermanentExhibitions();
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

}
