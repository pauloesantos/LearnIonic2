import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { QuotesList } from './quotes-list';

@NgModule({
  declarations: [
    QuotesList,
  ],
  imports: [
    IonicModule.forChild(QuotesList),
  ],
  exports: [
    QuotesList
  ]
})
export class QuotesListModule {}
