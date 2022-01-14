import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExhibitionService } from '../exhibition.service';
import { TourService } from '../tour.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    public exhibitionService: ExhibitionService,
    public tourService: TourService,
    private dialog: MatDialog
  ) { }
  //Uzimanje vrednosti ukupne sume proizvoda u korpi iz statičke varijable i davanje objektnoj
  ngOnInit(): void {
  }
  //Pozivanje dijaloga za potvrdu porudžbine, sa mogućnošću izmene adrese isporuke i broja telefona korisnika
  // onTourConfirm(list: Array<any>): void {
  //   // Vreme potrebno za isporuku porudžbine se računa kao najveće vreme isporuke među pojedinačnim elementima u korpi
  //   var maxDeliveryTime = function () {
  //     var values = list.map(val => val.deliveryTime);
  //     var max = Math.max.apply(null, values);
  //     return max;
  //   };
  //Otvaranje dijaloga
  // const dialogRef = this.dialog.open(TourconfirmComponent, {
  //   data: {
  //     deliveryTime: maxDeliveryTime()
  //   }
  // });
  //  }

  createTour(): void {
    this.tourService.addTour(
      "Neki kod",
      [...this.exhibitionService.cartList],
      "Neko ime",
      "Neki opis",
      this.exhibitionService.cartTotalPrice,
      "U toku",
      0);
  }

}
