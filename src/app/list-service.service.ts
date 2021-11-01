import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  myList: string[] = [];
  list: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.myList);
  list$: Observable<string[]>= this.list.asObservable(); 

  constructor() { }

  createItem(value: string){

    this.myList.push(value);
    this.list.next(this.myList);
  }
}
