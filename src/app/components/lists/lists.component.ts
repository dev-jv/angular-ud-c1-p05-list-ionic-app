import { Component, OnInit, Input } from '@angular/core';
import {WishesService} from '../../services/wishes.service';
import {Router} from '@angular/router';
import {List} from '../../models/list.model';
import {CompletedFilterPipe} from '../../pipes/completed-filter.pipe';

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
    console.log(list);
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
