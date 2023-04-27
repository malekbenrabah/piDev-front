export enum Type{
    House='House',
    Appartment = 'Appartment',
    Villa='Villa',
    Land='Land',
    Office='Office'
}


export class property{
    id: number;
    size: number;
    type: Type;
    rooms: number;
    parking: boolean;
    yardSpace: number;
    garage: boolean;
    ville: string;
    region: string;
    photo: string[];
}