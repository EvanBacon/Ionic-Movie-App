import { Component } from '@angular/core';

import { Movies} from '../../providers/movies';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

/*
  Generated class for the Today page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-today',
  templateUrl: 'today.html'
})
export class TodayPage {

  links = [];
  page = 1;
  constructor(public navCtrl: NavController, public movies: Movies) {
    this.movies.today(this.page).then(res => {
      this.links = res['data'];
    });

  }

    doInfinite(infiniteScroll) {
      console.log('Begin async operation');
      this.page += 1;
      this.movies.today(this.page).then(res => {
        this.links.push(res['data']);
        infiniteScroll.complete();
      });

    }

  clicked(item) {
    this.navCtrl.push(DetailsPage, {data: item});
  }

}
