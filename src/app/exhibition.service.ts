import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Exhibit } from './exhibit';
import { ShowExhibitsComponent } from './show-exhibits/show-exhibits.component';
import { UserService } from './user.service';

export interface Exhibition {
  id: number;
  category: 'Stalna postavka' | 'Privremena postavka';
  exhibitType: 'Knjige' | 'Novac' | 'Kulturno nasleđe' | 'Slike' | 'Dokumenti';
  numOfExhibits: number;
  exhibits: Array<Exhibit>;
  price: number;
  timeToComplete: number;
  title: string;
  rating: number;
  numberOfPersonsRated: number;
  description: string;
  comments: Array<any>;
}
@Injectable({
  providedIn: 'root',
})
export class ExhibitionService {
  cartTotalPrice: number = 0;
  exhibitionExists: boolean = false;
  cartList: Array<any> = [];
  userChosenExhibitions: Array<Exhibition> = [];

  dummyExhibitionList: Array<Exhibition> = [
    {
      id: 1,
      category: 'Stalna postavka',
      exhibitType: 'Knjige',
      numOfExhibits: 0,
      exhibits: [
        {
          id: 1,
          exhibitType: 'Knjige',
          price: 200,
          timeToComplete: 5,
          title: 'Beleške Svetog Save',
          rating: 4.8,
          numberOfPersonsRated: 13,
          description:
            'Sveti Sava bio je srpski princ, monah, iguman manastira Studenice, književnik, diplomata i prvi arhiepiskop autokefalne Srpske pravoslavne crkve.',
          countryOfOrigin: 'Srbija',
        },
        {
          id: 2,
          exhibitType: 'Knjige',
          price: 300,
          timeToComplete: 7,
          title: 'Beleške Stefana Prvovenčanog',
          rating: 4.5,
          numberOfPersonsRated: 8,
          description:
            'Stefan Prvovenčani bio je srpski srednjovekovni vladar i prvi krunisani kralj među Nemanjićima a zbog toga je dobio svoj opšteprihvaćeni nadimak Prvovenčani.',
          countryOfOrigin: 'Srbija',
        },
        {
          id: 3,
          exhibitType: 'Knjige',
          price: 350,
          timeToComplete: 10,
          title: 'Beleške Uroša Nejakog',
          rating: 4.2,
          numberOfPersonsRated: 6,
          description:
            'Stefan Uroš V, poznatiji kao Uroš Nejaki, bio je srpski car i poslednji vladar iz dinastije Nemanjića.',
          countryOfOrigin: 'Srbija',
        }
      ],
      comments: [
        {
          username: 'itme536',
          rating: 4,
          comment: "Nije lose iskreno"
        },
        {
          username: 'tinatina99',
          rating: 5,
          comment: "Odlicna postavka!!!"
        },
        {
          username: 'heyboi227',
          rating: 3,
          comment: "Ima i boljih postavki..."
        },
      ],
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
      exhibits: [
        {
          id: 4,
          exhibitType: 'Kulturno nasleđe',
          price: 200,
          timeToComplete: 6,
          title: 'Ogrlica Ane Dandolo',
          rating: 4.7,
          numberOfPersonsRated: 10,
          description:
            'Ana Dandolo je bila srpska kraljica, supruga kralja Stefana Prvovenčanog i majka budućeg kralja Stefana Uroša I.',
          countryOfOrigin: 'Srbija',

        },

        {
          id: 5,
          exhibitType: 'Kulturno nasleđe',
          price: 300,
          timeToComplete: 4,
          title: 'Vaza iz perioda Vinčanske kulture',
          rating: 4.2,
          numberOfPersonsRated: 5,
          description:
            'Vinčanska kultura predstavlja mlađeneolitsku i ranoeneolitsku kulturu Evrope.',
          countryOfOrigin: 'Srbija',
        }

      ],
      comments: [
        {
          username: 'milicab',
          rating: 5,
          comment: "Fantasticni eksponati!"
        },
        {
          username: 'uros89',
          rating: 1,
          comment: "Zaobidjite ovu postavku, ima mnogo boljih"
        },
        {
          username: 'marija123',
          rating: 3,
          comment: "Interesantno ali to moze bolje..."
        },
      ],
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
      exhibits: [
        {
          id: 6,
          exhibitType: 'Novac',
          price: 150,
          timeToComplete: 5,
          title: 'Novčić iz perioda kraljevine Jugoslavije',
          rating: 3.9,
          numberOfPersonsRated: 8,
          description:
            'Kraljevina Jugoslavija je bila država u jugoistočnoj Evropi, koja je većim delom zahvatala Balkansko poluostrvo, a manjim Panonsku niziju.',
          countryOfOrigin: 'Srbija',
        },
        {
          id: 7,
          exhibitType: 'Novac',
          price: 800,
          timeToComplete: 4,
          title: 'Kovanica iz perioda Starčevačke kulture',
          rating: 4.4,
          numberOfPersonsRated: 12,
          description:
            'Starčevačka kultura je srednjoneolitska kultura koja se rasprostirala na centralnom Balkanu tokom 4. i 5. milenijuma p. n. e. Ime je dobila po lokalitetu Starčevo.',
          countryOfOrigin: 'Srbija',
        },
        {
          id: 8,
          exhibitType: 'Novac',
          price: 300,
          timeToComplete: 4,
          title: 'Novac iz srednjevekovnog perioda',
          rating: 4.0,
          numberOfPersonsRated: 10,
          description:
            'Kneževina Srbija u ranom srednjem veku je naziv za prvu srpsku državu, kojom je vladala prva srpska dinastija Višeslavića.',
          countryOfOrigin: 'Srbija',
        }
      ],
      comments: [],
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
      exhibits: [
        {
          id: 9,
          exhibitType: 'Dokumenti',
          price: 250,
          timeToComplete: 8,
          title: 'Ljubavno pismo Jovana Dučića',
          rating: 4.8,
          numberOfPersonsRated: 8,
          description:
            'Jovan Dučić bio je srpski i jugoslovenski pesnik, pisac, diplomata i akademik. U diplomatiji je uspešno službovao preko tri decenije u nekoliko gradova.',
          countryOfOrigin: 'Srbija',
        },
        {
          id: 10,
          exhibitType: 'Dokumenti',
          price: 450,
          timeToComplete: 5,
          title: 'Testament Laze Kostića',
          rating: 3.9,
          numberOfPersonsRated: 5,
          description:
            'Lazar „Laza“ Kostić bio je srpski književnik, pesnik, doktor pravnih nauka, advokat, poliglota, novinar, dramski pisac i estetičar.',
          countryOfOrigin: 'Srbija',
        }
      ],
      comments: [
        {
          username: 'marijaperic',
          rating: 5,
          comment: "Odusevljena sam"
        },
        {
          username: 'milanpetrovic',
          rating: 4,
          comment: "Dobra postavka interesantni eksponati, skuplja je malo..."
        },
        {
          username: 'losmilosmi',
          rating: 1,
          comment: "Dosadno..."
        },
      ],
      price: 0,
      timeToComplete: 0,
      title: 'Iz pera naših velikana',
      rating: 3.89,
      numberOfPersonsRated: 15,
      description:
        'Zavirite u misli naših najvećih pesnika počev od Dučića do Ljubivoja Ršumovića.',
    },
    {
      id: 5,
      category: 'Stalna postavka',
      exhibitType: 'Slike',
      numOfExhibits: 0,
      exhibits: [
        {
          id: 11,
          exhibitType: 'Slike',
          price: 750,
          timeToComplete: 8,
          title: 'Sava Šumanović-Žuti potok',
          rating: 4.9,
          numberOfPersonsRated: 7,
          description:'Sava Šumanović bio je srpski slikar. Šumanović je jedan od najznačajnijih slikara srpske umetnosti 20. veka.',
          countryOfOrigin: 'Srbija',
        },
        {
          id: 12,
          exhibitType: 'Slike',
          price: 550,
          timeToComplete: 5,
          title: 'Paja Jovanović-Seoba srba',
          rating: 5.0,
          numberOfPersonsRated: 12,
          description:
            'Pavle Paja Jovanović bio je srpski slikar i tipičan predstavnik akademskog realizma. Najbliži mu je po mnogo čemu slikar Uroš Predić, iako su bili takmaci na umetničkom polju.',
          countryOfOrigin: 'Srbija',
        }
      ],
      comments: [],
      price: 0,
      timeToComplete: 0,
      title: 'Junaci naše slikovne istorije',
      rating: 4.37,
      numberOfPersonsRated: 10,
      description:
        'Najlepša dela srpskih slikara.',
    },
  ];

  constructor(
    public userService: UserService,
    private dialog: MatDialog
  ) { }

  sumParameters(): void {
    this.dummyExhibitionList.forEach((exhibition) => {
      let filteredExhibitPrices: Array<number> = [];
      let filteredExhibitTimesToComplete: Array<number> = [];
      exhibition.exhibits.forEach(e => {
        filteredExhibitPrices.push(e.price);
        filteredExhibitTimesToComplete.push(e.timeToComplete);
      });
      exhibition.numOfExhibits = exhibition.exhibits.length;
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
    if (this.userService.currentUser.favoriteTypes && this.userService.currentUser.favoriteTypes.length != 0) {
      this.userService.currentUser.favoriteTypes.forEach((type) => {
        this.dummyExhibitionList
          .filter((e) => e.exhibitType == type)
          .forEach((el) => {
            favoriteExhibitions.push(el);
          });
      });
    }
    console.log(favoriteExhibitions);
    console.log(this.userService.currentUser);
    return favoriteExhibitions;
  }

  getUserChosenExhibitions(): Exhibition[] {
    return this.userChosenExhibitions;
  }

  viewExhibits(exhibition: Exhibition): void {
        //Otvaranje dijaloga
        const dialogRef = this.dialog.open(ShowExhibitsComponent, {
          data: {
            exhibits: exhibition.exhibits,
            exhibitionTitle: exhibition.title
          }
        });
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
        exhibits: exhibition.exhibits,
        title: exhibition.title,
        price: exhibition.price,
        timeToComplete: exhibition.timeToComplete,
        description: exhibition.description,
        category: exhibition.category,
        numOfExhibits: exhibition.numOfExhibits,
      });
      this.cartTotalPrice += exhibition.price;
      alert('Postavka je uspešno dodata u korpu!');
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
