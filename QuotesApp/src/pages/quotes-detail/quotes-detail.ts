import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from 'ionic-native';

/**
 * Generated class for the QuotesDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-quotes-detail',
  templateUrl: 'quotes-detail.html',
})
export class QuotesDetail {

  quoteDetail: {quote:'', author:''};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.quoteDetail = navParams.get('quote');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesDetail');
  }

  twitterShare() {
    console.log("in twitter share");
    let quote: string = this.quoteDetail.quote;
    SocialSharing.shareViaTwitter(quote.substring(0,110)+"..",null /*Image*/,"http://ionicframework.com/img/homepage/ionicview-icon_2x.png")
.then((data )=> {
  alert("Success "+data);
},
(err)=>{
  alert("failed "+err)
})
  }

}
