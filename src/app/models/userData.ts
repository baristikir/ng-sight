import { User } from './user';

export class userData {
    private _authToken: string;

    constructor(_authToken:string){
        this._authToken = _authToken;
    }
    user: User;
}