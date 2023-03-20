export class Mail {
    private _type: string;
    private _direction: string;

    constructor(type:string, direction: string) {
        this._type = type;
        this._direction = direction;
    }

    public get type(): string {
        return this._type
    }
    public set type(val: string) {
        this._type = val;
    }

    public get direction(): string {
        return this._direction
    }
    public set direction(val: string) {
        this._direction = val;
    }
}