import { Component } from '@angular/core';

import { Movies} from '../../providers/movies';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  page = 1;

  links = [];
  constructor(public navCtrl: NavController, public movies: Movies) {
    this.movies.getMovies().then(res => {
      this.links = res['data'];
    });

    this.clicked({img: 'http://image4.putlockers.ch/images/covers/sing-online-free-putlocker.jpg', title: 'Sing',link: 'http://putlockers.ch/watch-sing-online-free-putlocker.html'});
  }
  clicked(item) {
    this.navCtrl.push(DetailsPage, {data: item});
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    this.page += 1;
    this.movies.getMovies(this.page).then(res => {
      this.links.push(res['data']);
      infiniteScroll.complete();
    });

  }

}
