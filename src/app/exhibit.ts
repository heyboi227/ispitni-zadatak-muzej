export interface Exhibit {
    id: number;
    exhibitType: 'Knjige' | 'Novac' | 'Kulturno nasleđe' | 'Slike' | 'Dokumenti';
    price: number;
    timeToComplete: number;
    title: string;
    rating: number;
    numberOfPersonsRated: number;
    description: string;
    countryOfOrigin: string;
}
