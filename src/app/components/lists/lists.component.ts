import { Component, OnInit, Input } from '@angular/core';
import {WishesService} from '../../services/wishes.service';
import {Router} from '@angular/router';
import {List} from '../../models/list.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input() finished = true;


  constructor(public whishesService: WishesService,
              private router: Router) { }

  ngOnInit() {}

  selectedList(list: List) {
    if(this.finished) {
      this.router.navigateByUrl(`/tabs/tab2/add/${list.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/add/${list.id}`);
    }

    console.log(list);

  };

  delete(list: List) {
    this.whishesService.deleteList(list);
  }

}
