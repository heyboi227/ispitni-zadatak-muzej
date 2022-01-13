import { Injectable } from '@angular/core';
import { ExhibitService } from './exhibit.service';
import { UserService } from './user.service';

export interface Exhibition {
  id: number;
  category: 'Stalna postavka' | 'Privremena postavka';
  exhibitType: 'Knjige' | 'Novac' | 'Kulturno nasleđe' | 'Slike' | 'Dokumenti';
  numOfExhibits: number;
  price: number;
  timeToComplete: number;
  title: string;
  rating: number;
  numberOfPersonsRated: number;
  description: string;
}
@Injectable({
  providedIn: 'root',
})
export class ExhibitionService {
  cartTotalPrice: number = 0;
  exhibitionExists: boolean = false;
  cartList: Array<Exhibition> = [];

  dummyExhibitionList: Array<Exhibition> = [
    {
      id: 1,
      category: 'Stalna postavka',
      exhibitType: 'Knjige',
      numOfExhibits: 0,
      price: 0,
      timeToComplete: 0,
      title: 'Trilogija o Nemanjićima',
      rating: 4.67,
      numberOfPersonsRated: 16,
      description:
        'Uzbudljiva trilogija o jednoj najpoznatijih srpskih dinastija koja je obeležila srednjovekovno doba.',
    },
    {
      id: 2,
      category: 'Privremena postavka',
      exhibitType: 'Kulturno nasleđe',
      numOfExhibits: 0,
      price: 0,
      timeToComplete: 0,
      title: 'Nakit iz perioda Vinčanske kulture',
      rating: 4.81,
      numberOfPersonsRated: 25,
      description:
        'Izložba autentičnog nakita koji su nosili starosedeoci praistorijskog doba sa prostora Vinče.',
    },
    {
      id: 3,
      category: 'Stalna postavka',
      exhibitType: 'Novac',
      numOfExhibits: 0,
      price: 0,
      timeToComplete: 0,
      title: 'Novac kroz srpsku istoriju',
      rating: 4.4,
      numberOfPersonsRated: 10,
      description:
        'Najznačajnije novčanice i kovanice iz srpske istorije na jednom mestu. Počev od srednjeg veka, sve do danas.',
    },
    {
      id: 4,
      category: 'Privremena postavka',
      exhibitType: 'Dokumenti',
      numOfExhibits: 0,
      price: 0,
      timeToComplete: 0,
      title: 'Iz pera naših velikana',
      rating: 3.89,
      numberOfPersonsRated: 15,
      description:
        'Zavirite u misli naših najvećih pesnika počev od Dučića do Ljubivoja Ršumovića.',
    },
  ];

  constructor(
    public exhibitService: ExhibitService,
    public userService: UserService
  ) {}

  sumParameters(): void {
    this.dummyExhibitionList.forEach((exhibition) => {
      let filteredExhibitPrices: Array<number> = [];
      let filteredExhibitTimesToComplete: Array<number> = [];
      this.exhibitService.dummyExhibitList
        .filter((exhibit) => exhibit.exhibitionId == exhibition.id)
        .forEach((e) => {
          filteredExhibitPrices.push(e.price);
          filteredExhibitTimesToComplete.push(e.timeToComplete);
        });
      exhibition.numOfExhibits = filteredExhibitPrices.length;
      exhibition.price = filteredExhibitPrices.reduce((a, b) => a + b, 0);
      exhibition.timeToComplete = filteredExhibitTimesToComplete.reduce(
        (a, b) => a + b,
        0
      );
    });
  }

  getPermanentExhibitions(): Exhibition[] {
    return this.dummyExhibitionList.filter(
      (exhibition) => exhibition.category == 'Stalna postavka'
    );
  }

  getExhibitions(): Exhibition[] {
    return this.dummyExhibitionList;
  }

  getFavoriteExhibitions(): Exhibition[] {
    let favoriteExhibitions: Array<Exhibition> = [];
    this.userService.currentUser.favoriteTypes.forEach((type) => {
      this.dummyExhibitionList
        .filter((e) => e.exhibitType == type)
        .forEach((el) => {
          favoriteExhibitions.push(el);
        });
    });
    console.log(favoriteExhibitions);
    console.log(this.userService.currentUser);
    return favoriteExhibitions;
  }

  //Dodavanje proizvoda u korpu

  addToCart(exhibition: Exhibition): void {
    //Ako proizvod već postoji u korpi, stavlja se promenljiva da postoji u korpi na true

    for (let i of this.cartList) {
      if (i.id === exhibition.id) {
        this.exhibitionExists = true;
        alert('Postavka je već dodata u korpu.');
        break;
      } else {
        this.exhibitionExists = false;
      }
    }

    //Ako proizvod ne postoji u korpi, dodaje se u listu sa najosnovnijim atributima

    if (!this.exhibitionExists) {
      this.cartList.push({
        id: exhibition.id,
        exhibitType: exhibition.exhibitType,
        title: exhibition.title,
        price: exhibition.price,
        timeToComplete: exhibition.timeToComplete,
        description: exhibition.description,
        category: exhibition.category,
        numOfExhibits: exhibition.numOfExhibits,
        numberOfPersonsRated: exhibition.numberOfPersonsRated,
        rating: exhibition.rating,
      });
      this.cartTotalPrice += exhibition.price;
      alert('Proizvod je uspešno dodat u korpu!');
    }

    //Suma ukupne cene svih proizvoda u korpi, sa njihovim količinama (br. komada)
  }

  //Briše se pojedinačni komad proizvoda iz korpe, ukoliko postoji, i ukupna cena u korpi se umanjuje za isti komad

  deleteFromCart(exhibition: Exhibition): void {
    var prodIndex = this.cartList.indexOf(exhibition);
    if (prodIndex > -1) {
      this.cartList.splice(prodIndex, 1);
    }

    this.cartTotalPrice -= exhibition.price;
  }

  //Brisanje svih elemenata iz korpe

  removeAll(): void {
    this.cartList.length = 0;
    this.cartTotalPrice = 0;
  }
}
