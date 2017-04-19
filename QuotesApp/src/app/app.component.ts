import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QuotesListPage } from '../pages/quotes-list/quotes-list';
import { QuotesDetailPage } from '../pages/quotes-detail/quotes-detail';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  //rootPage:any = HomePage;
  rootPage = QuotesListPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

