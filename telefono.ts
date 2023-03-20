export class Phone {
    private _type: string;
    private _number: number;

    constructor(type:string, number: number) {
        this._type = type;
        this._number = number;
    }

    public get type(): string {
        return this._type
    }
    public set type(val: string) {
        this._type = val;
    }

    public get number(): number {
        return this._number
    }
    public set number(val: number) {
        this._number = val;
    }
}