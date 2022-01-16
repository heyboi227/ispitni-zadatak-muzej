import { Injectable } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor() { }

  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }, item: any): void {

    //Računanje ukupne sume kao proizvod postojeće ocene pojedinačnog proizvoda i postojećeg broja korisnika
    //koji su ocenili proizvod
    var ratingSum = item.rating * item.numberOfPersonsRated;

    //Suma se uvećava za novu ocenu klikom na odgovarajuću zvezdicu (uzimanje newValue varijable za događaj)
    ratingSum += $event.newValue;
    item.numberOfPersonsRated++;

    //Aritmetička vrednost sume ocena i broja korisnika koji su dali ocenu se prosleđuje polju ocene za proizvod,
    //a samim tim i novoj vrednosti simboličkog predstavljanja ocene (pomoću zvezda)
    item.rating = parseFloat((ratingSum / item.numberOfPersonsRated).toFixed(2));
    $event.starRating.value = item.rating;

  }
}
