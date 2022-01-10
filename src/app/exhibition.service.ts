import { Injectable } from '@angular/core';


export interface Exhibition {
  id: number;
  category: "Stalna postavka" | "Privremena postavka";
  exhibitType: "Knjige" | "Novac" | "Kulturno nasleđe" | "Slike" | "Dokumenti";
  numOfExhibits: number;
  price: number;
  timeToComplete: number;
  title: string;
  rating: number;
  numberOfPersonsRated: number;
  description: string;

}
@Injectable({
  providedIn: 'root'
})


export class ExhibitionService {


  dummyExhibitionList: Array<Exhibition> = [
    {
      id: 1,
      category: "Stalna postavka",
      exhibitType: "Knjige",
      numOfExhibits: 3,
      price: 600,
      timeToComplete: 15,
      title: "Trilogija o Nemanjićima",
      rating: 4.67,
      numberOfPersonsRated: 16,
      description: "Uzbudljiva trilogija o jednoj najpoznatijih srpskih dinastija koja je obeležila srednjovekovno doba."
    },
    {
      id: 2,
      category: "Privremena postavka",
      exhibitType: "Kulturno nasleđe",
      numOfExhibits: 5,
      price: 900,
      timeToComplete: 20,
      title: "Nakit iz perioda Vinčanske kulture",
      rating: 4.81,
      numberOfPersonsRated: 25,
      description: "Izložba autentičnog nakita koji su nosili starosedeoci praistorijskog doba sa prostora Vinče."
    },
    {
      id: 3,
      category: "Stalna postavka",
      exhibitType: "Novac",
      numOfExhibits: 4,
      price: 1000,
      timeToComplete: 10,
      title: "Novac kroz srpsku istoriju",
      rating: 4.4,
      numberOfPersonsRated: 10,
      description: "Najznačajnije novčanice i kovanice iz srpske istorije na jednom mestu. Počev od srednjeg veka, sve do danas."
    },
    {
      id: 4,
      category: "Privremena postavka",
      exhibitType: "Dokumenti",
      numOfExhibits: 3,
      price: 700,
      timeToComplete: 15,
      title: "Iz pera naših velikana",
      rating: 3.89,
      numberOfPersonsRated: 15,
      description: "Zavirite u misli naših najvećih pesnika počev od Dučića do Ljubivoja Ršumovića."
    }

  ];


  constructor() { }

  getPermanentExhibitions(): Exhibition[]{
    return this.dummyExhibitionList.filter(exhibition => exhibition.category == "Stalna postavka");

  }

  getExhibitions(): Exhibition[] {
    return this.dummyExhibitionList;
  }


}

