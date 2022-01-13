import { Injectable } from '@angular/core';

export interface Exhibit {
  id: number;
  exhibitionId: number;
  exhibitType: 'Knjige' | 'Novac' | 'Kulturno nasleđe' | 'Slike' | 'Dokumenti';
  price: number;
  timeToComplete: number;
  title: string;
  rating: number;
  numberOfPersonsRated: number;
  description: string;
  countryOfOrigin: string;
}

@Injectable({
  providedIn: 'root',
})
export class ExhibitService {
  dummyExhibitList: Array<Exhibit> = [
    {
      id: 1,
      exhibitionId: 1,
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
      exhibitionId: 1,
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
      exhibitionId: 1,
      exhibitType: 'Knjige',
      price: 350,
      timeToComplete: 10,
      title: 'Beleške Uroša Nejakog',
      rating: 4.2,
      numberOfPersonsRated: 6,
      description:
        'Stefan Uroš V, poznatiji kao Uroš Nejaki, bio je srpski car i poslednji vladar iz dinastije Nemanjića.',
      countryOfOrigin: 'Srbija',
    },
    {
      id: 4,
      exhibitionId: 2,
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
      exhibitionId: 2,
      exhibitType: 'Kulturno nasleđe',
      price: 300,
      timeToComplete: 4,
      title: 'Vaza iz perioda Vinčanske kulture',
      rating: 4.2,
      numberOfPersonsRated: 5,
      description:
        'Vinčanska kultura predstavlja mlađeneolitsku i ranoeneolitsku kulturu Evrope.',
      countryOfOrigin: 'Srbija',
    },
    {
      id: 6,
      exhibitionId: 3,
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
      exhibitionId: 3,
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
      exhibitionId: 3,
      exhibitType: 'Novac',
      price: 300,
      timeToComplete: 4,
      title: 'Novac iz srednjeovekovnog perioda',
      rating: 4.0,
      numberOfPersonsRated: 10,
      description:
        'Kneževina Srbija u ranom srednjem veku je naziv za prvu srpsku državu, kojom je vladala prva srpska dinastija Višeslavića.',
      countryOfOrigin: 'Srbija',
    },
    {
      id: 9,
      exhibitionId: 4,
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
      exhibitionId: 4,
      exhibitType: 'Dokumenti',
      price: 450,
      timeToComplete: 5,
      title: 'Testament Laze Kostića',
      rating: 3.9,
      numberOfPersonsRated: 5,
      description:
        'Lazar „Laza“ Kostić bio je srpski književnik, pesnik, doktor pravnih nauka, advokat, poliglota, novinar, dramski pisac i estetičar.',
      countryOfOrigin: 'Srbija',
    },
  ];

  constructor() {}
}
