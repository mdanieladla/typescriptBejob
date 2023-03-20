export class Direction {
    private _street: string;
    private _number: number;
    private _flat: number;
    private _letter: string;
    private _postalCode: number;
    private _city: string;
    private _province: string;
    
    constructor(street: string, number: number, flat: number, letter: string, postalCode: number, city: string, province: string) {
        this._street = street;
        this._number = number;
        this._flat = flat;
        this._letter = letter;
        this._postalCode = postalCode;
        this._city = city;
        this._province = province;
    }
    
    public get street(): string {
        return this._street
    }
    public set street(val: string) {
        this._street = val;
    }

    public get number(): number {
        return this._number
    }
    public set number(val: number) {
        this._number = val;
    }
    
    public get flat(): number {
        return this._flat
    }
    public set flat(val: number) {
        this._flat = val;
    }

    public get letter(): string {
        return this._letter
    }
    public set letter(val: string) {
        this._letter = val;
    }
    
    public get postalCode(): number {
        return this._postalCode
    }
    public set postalCode(val: number) {
        this._postalCode = val;
    }

    public get city(): string {
        return this._city
    }
    public set city(val: string) {
        this._city = val;
    }

    public get province(): string {
        return this._province
    }
    public set province(val: string) {
        this._province = val;
    }
    
}