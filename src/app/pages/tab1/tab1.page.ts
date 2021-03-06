import { Component } from '@angular/core';
import {WishesService} from '../../services/wishes.service';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {List} from '../../models/list.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public whishesService: WishesService,
              private router: Router,
              private alertCtrl: AlertController) {
  }

  async addList() {
    // this.router.navigateByUrl('/tabs/tab1/add');
    const alert = await this.alertCtrl.create({
      header: 'New list',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'List name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Create',
          handler: (data) => {
            console.log(data);
            console.log(data.title);
            if(data.title.length === 0) {
              return;
            }
            const listId = this.whishesService.createList(data.title);
            console.log(listId);


            this.router.navigateByUrl(`/tabs/tab1/add/${listId}`);
          }
        }
      ]
    });

    alert.present();

  }

  // selectedList(list: List) {
  //   console.log(list);
  //   this.router.navigateByUrl(`/tabs/tab1/add/${list.id}`);
  // };

}
