import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-exhibits',
  templateUrl: './show-exhibits.component.html',
  styleUrls: ['./show-exhibits.component.css']
})
export class ShowExhibitsComponent implements OnInit {
  recievedData: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.recievedData = {
      title: this.data.exhibitionTitle,
      exhibits: this.data.exhibits
    }
  }

}
