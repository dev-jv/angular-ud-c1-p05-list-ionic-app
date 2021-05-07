import { Injectable } from '@angular/core';
import {List} from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  lists: List [] = [];

  constructor() {

    this.loadLocalStg();
    // console.log('Service initialized');

    // const list1 = new List('Watering');
    // const list2 = new List('Propagation');
    // const list3 = new List('New projects');
    // const list4 = new List('Wiring');

    // this.lists.push(list1, list2, list3, list4);

    // console.log(this.lists);
  }

  createList( title: string) {
    const newList = new List(title);
    this.lists.push(newList);
    this.saveLocalStg();
  }

  saveLocalStg() {
    localStorage.setItem('data', JSON.stringify(this.lists));
  }

  loadLocalStg() {
    if(localStorage.getItem('data')){
      this.lists = JSON.parse(localStorage.getItem('data'));
      console.log(JSON.parse(localStorage.getItem('data')));
    } else {
      this.lists = [];
    }
  }
  
}
