import { Injectable } from '@angular/core';
import {List} from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  lists: List [] = [];

  constructor() {

    // console.log('Service initialized');

    const list1 = new List('Watering');
    const list2 = new List('Propagation');
    const list3 = new List('New projects');
    const list4 = new List('Wiring');

    this.lists.push(list1, list2, list3, list4);

    console.log(this.lists);

  }

  createList( title: string) {
    const newList = new List(title);
    this.lists.push(newList);
  }
}
