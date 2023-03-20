import { Direction } from "./direccion";
import { Mail } from "./mail";
import { Phone } from "./telefono";

export class Person {
    private _name: string;
    private _lastName: string;
    private _age: number;
    private _dni: string;
    private _birthday: Date;
    private _favColor: string;
    private _genre: string;
    private _directions: Direction[];
    private _mails: Mail[];
    private _phones: Phone[];
    private _notes: string;

    constructor(name: string, lastName: string, age: number, dni: string, birthday: Date, 
        favColor: string, genre: string, directions: Direction[], mails: Mail[], 
        phones: Phone[], notes: string) {
        this._name = name;
        this._lastName = lastName;
        this._age = age;
        this._dni = dni;
        this._birthday = birthday;
        this._favColor = favColor;
        this._genre = genre;
        this._directions = directions;
        this._mails = mails;
        this._phones = phones;
        this._notes = notes;
    }
    
    public get name(): string {
        return this._name
    }
    public set name(val: string) {
        this._name = val;
    }
    
    public get lastName(): string {
        return this._lastName
    }
    public set lastName(val: string) {
        this._lastName = val;
    }
    
    public get age(): number {
        return this._age
    }
    public set age(val: number) {
        this._age = val;
    }
    
    public get dni(): string {
        return this._dni
    }
    public set dni(val: string) {
        this._dni = val;
    }

    public get birthday(): Date {
        return this._birthday
    }
    public set birthday(val: Date) {
        this._birthday = val;
    }
   
    public get favColor(): string {
        return this._favColor
    }
    public set favColor(val: string) {
        this._favColor = val;
    }

    public get genre(): string {
        return this._genre
    }
    public set genre(val: string) {
        this._genre = val;
    }

    public get directions(): Direction[] {
        return this._directions
    }
    public set directions(val: Direction[]) {
        this._directions = val;
    }
    
    public get mails(): Mail[] {
        return this._mails
    }
    public set mails(val: Mail[]) {
        this._mails = val;
    }
    
    public get phones(): Phone[] {
        return this._phones
    }
    public set phones(val: Phone[]) {
        this._phones = val;
    }
    
    public get notes(): string {
        return this._notes
    }
    public set notes(val: string) {
        this._notes = val;
    }

    addDirection(direction: Direction) {
        this._directions.push(direction)
    }

    addPhone(phone: Phone) {
        this._phones.push(phone)
    }

    addMail(mail: Mail) {
        this._mails.push(mail)
    }
}