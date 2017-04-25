import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { QuotesDetail } from './quotes-detail/';

@NgModule({
  declarations: [
    QuotesDetail,
  ],
  imports: [
    IonicModule.forRoot(QuotesDetail),
  ],
  exports: [
    QuotesDetail
  ]
})
export class QuotesDetailModule {}
