import { Component } from '@angular/core';
import {WishesService} from '../../services/wishes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  wishes: any[] = [];

  constructor(public whishesService: WishesService ) {

    // console.log(whishesService.lists);

  }

}
