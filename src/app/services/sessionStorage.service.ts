import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {

  public getItem(key: string): void {
    return JSON.parse(sessionStorage.getItem(key));
  }

  public setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
