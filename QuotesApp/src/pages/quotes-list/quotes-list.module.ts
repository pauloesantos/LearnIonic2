import { MyApp } from '../../../../CounterApp/src/app/app.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicModule, IonicApp, IonicErrorHandler } from 'ionic-angular';
import { QuotesListPage } from './../quotes-list';
import { QuotesDetailPage } from './../quotes-detail';

@NgModule({
  declarations: [
    MyApp,
    QuotesListPage,
    QuotesDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  exports: [
    MyApp,
    QuotesListPage,
    QuotesDetailPage
  ],
  providers:[{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class QuotesListModule {}
