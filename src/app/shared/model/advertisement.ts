import { property } from './property';

export enum TypeAd {
  Rental = 'Rental',
  Sale = 'Sale'
}

export class advertisement{

    id: number;
    title: string;
    price: string;
    description: string;
    typeAd: TypeAd;
    foreignAdUrl: string;
    scraped: boolean;
    created_at: Date;
    property: property;
    username: string;
    phone:string;
    email:string;

}