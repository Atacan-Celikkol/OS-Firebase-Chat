import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService<TRequest, TResponse> {

    constructor(protected db: AngularFireDatabase, protected endpoint: string) { }

    getItems(): Observable<TResponse[]> {
        return this.db.list(this.endpoint).valueChanges() as Observable<TResponse[]>;
    }

    getItem(): Observable<TResponse> {
        return this.db.object(this.endpoint).valueChanges() as Observable<TResponse>;
    }

    pushItem(data: TRequest) {
        this.db.list(this.endpoint).push(data);
    }

    setItem(data: any) {
        this.db.object(this.endpoint).set(data);
    }

    deleteItem() {
        this.db.object(this.endpoint).remove();
    }

    updateItem(data: TRequest) {
        this.db.object(this.endpoint).set(data);
    }
}
