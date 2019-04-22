import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
    providedIn: 'root'
})
export class BaseService<TRequest, TResponse> {
    protected db: AngularFireDatabase;
    constructor() { }

    getItems(url: string): TResponse[] {
        let response;
        this.db.list(url).valueChanges().subscribe(x => response = x);
        return response;
    }

    getItem(url: string): TResponse {
        let response;
        this.db.list(url).valueChanges().subscribe(x => response = x);
        return response;
    }

    postItem(url: string) {

    }

    deleteItem(url: string) {

    }

    updateItem(url: string) {

    }
}
