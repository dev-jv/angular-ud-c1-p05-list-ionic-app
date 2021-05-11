import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {WishesService} from '../../services/wishes.service';
import {Router} from '@angular/router';
import {List} from '../../models/list.model';
import {CompletedFilterPipe} from '../../pipes/completed-filter.pipe';
import {AlertController, IonList} from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input() finished = true;
  @ViewChild(IonList) list: IonList;

  constructor(public whishesService: WishesService,
              private router: Router,
              private alertCtrl: AlertController) { }

  ngOnInit() {}

  selectedList(list: List) {
    // console.log(list);
    if(this.finished) {
      this.router.navigateByUrl(`/tabs/tab2/add/${list.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/add/${list.id}`);
    }
  };

  async edit(listUpd: List) {

    const alert = await this.alertCtrl.create({
      header: 'Edit list',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: listUpd.title,
          placeholder: 'List name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
            this.list.closeSlidingItems();
          }
        },
        {
          text: 'Update',
          handler: (data) => {
            // console.log(data);
            // console.log(data.title);
            // console.log(listUpd);
            if(data.title.length === 0) {
              return;
            }
            listUpd.title = data.title;
            this.whishesService.saveLocalStg();
            // this.router.navigateByUrl(`/tabs/tab1/add/${listUpd.id}`);
            this.list.closeSlidingItems();
          }
        }
      ]
    });

    alert.present();

  }








  delete(list: List) {
    this.whishesService.deleteList(list);
  }

}
