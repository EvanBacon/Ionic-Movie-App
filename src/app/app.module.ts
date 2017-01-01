import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailsPage } from '../pages/details/details';
import { SearchPage } from '../pages/search/search';
import { TodayPage } from '../pages/today/today';

import { Movies } from '../providers/movies';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    DetailsPage,
    ContactPage,
    HomePage,
    TodayPage,
    SearchPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    DetailsPage,
    ContactPage,
    HomePage,
    TodayPage,
    SearchPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Movies]
})
export class AppModule {}
