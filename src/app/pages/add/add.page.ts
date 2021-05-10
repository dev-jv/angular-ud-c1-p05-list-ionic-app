import { Component, OnInit } from '@angular/core';
import {WishesService} from '../../services/wishes.service';
import {ActivatedRoute} from '@angular/router';
import {List} from '../../models/list.model';
import {ListItem} from '../../models/list-item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list: List;
  itemName: '';

  constructor( private whishesService: WishesService,
               private route: ActivatedRoute) {

    const listId = this.route.snapshot.paramMap.get('listId');

    this.list = whishesService.getList(listId);

    console.log(listId);
    console.log(this.list);
    console.log(this.list.items);
    console.log(this.itemName);
  }

  ngOnInit() {
  }

  // addItems(title: string) {
  //   const newItem = new ListItem(title);
  //   this.list.items.push( newItem );
  // }

  addItems() {
    if (this.itemName.length === 0) {
      return;
    }

    const newItem = new ListItem(this.itemName);
    this.list.items.push(newItem);

    this.itemName = '';
    this.whishesService.saveLocalStg();
  }


}
