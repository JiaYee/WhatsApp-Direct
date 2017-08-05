import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Clipboard } from '@ionic-native/clipboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  phone: any;

  srcImage: string;
  OCRAD: any;

  constructor(private clipboard: Clipboard, public navCtrl: NavController) {

  }

  wsNow()
  {
      window.open("https://api.whatsapp.com/send?phone=6" + this.phone);
  }

  pasteClipboard()
  {
    this.clipboard.paste().then(
      (resolve: string) => {
        this.phone = resolve;
      },
      (reject: string) => {
        alert('Error: ' + reject);
      }
    );
  }

}
