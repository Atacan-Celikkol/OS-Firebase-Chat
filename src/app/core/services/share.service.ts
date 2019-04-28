import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ShareService {

    constructor() { }

    private userIdSource = new BehaviorSubject<string>(this.getFromLocalStorage('userId'));
    userId = this.userIdSource.asObservable();

    changeUserId(id: string) {
        this.userIdSource.next(this.setFromLocalStorage('userId', id));
    }

    getFromLocalStorage(key: string): string {
        return localStorage.getItem(key);
    }

    setFromLocalStorage(key: string, value: string): string {
        localStorage.setItem(key, value);
        return this.getFromLocalStorage(key);
    }

    removeFromLocalStorage(key: string): void {
        return localStorage.removeItem(key);
    }

}
