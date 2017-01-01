import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Movies} from '../../providers/movies';

/*
Generated class for the Details page.

See http://ionicframework.com/docs/v2/components/#navigation for more info on
Ionic pages and navigation.
*/
@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {


  encode(link) {
    return encodeURIComponent(link);
  }
  clicked(item) {
    this.navCtrl.push(DetailsPage, {data: item});

  }

  data;
  constructor(public navCtrl: NavController, public navParams: NavParams, public movies:Movies) {
    this.data = navParams.get('data');


    this.movies.getDetails(this.data['link']).then(res => {
      for (let key in res) {
        this.data[key] = res[key];
      }
      console.log('payload ', this.data);
    });

  }

  itemSelected(link) {
    window.open(link, '_system', 'location=yes');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
