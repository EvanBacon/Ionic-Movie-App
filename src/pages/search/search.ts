import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Movies} from '../../providers/movies';
import { DetailsPage } from '../details/details';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

query = '';
shouldShowCancel = false;

  results = [];

  page = 1;
  onInput(event) {
    this.page = 1;
    this.movies.search(this.query, this.page).then(results => {
        this.results = results['results'];
    });
  }
  itemSelected(item) {
    this.navCtrl.push(DetailsPage, {data: item});

  }

  onCancel(event) {

  }


  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    this.page += 1;
    this.movies.search(this.query, this.page).then(results => {
        this.results.push(results['results']);
        infiniteScroll.complete();
    });


  }





  constructor(public navCtrl: NavController, public movies:Movies, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}
