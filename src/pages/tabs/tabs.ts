import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { ContactPage } from '../contact/contact';
import { TodayPage } from '../today/today';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab0Root: any = TodayPage;
  tab2Root: any = SearchPage;
  tab3Root: any = ContactPage;

  constructor() {

  }
}
