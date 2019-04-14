import { Component } from '@angular/core';
import "hammerjs";
import { SovellusService } from '../sovellus.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../popover/popover.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  

  constructor(private sovellus : SovellusService, private iab: InAppBrowser, private popCTRL: PopoverController){
    
    //sovellus.tyhja2 = true;
  }

  avaaLinkki = (linkki) => {

    this.iab.create(linkki,`_blank`);

  }


  async presentPopover(ev: any, id : number, yrityksenNimi : string) {
    this.sovellus.kuvattavan_id = id;
    this.sovellus.kuvattavan_nimi = yrityksenNimi;
    const popover = await this.popCTRL.create({
      component: PopoverPage,
      componentProps: {
        kohde_id : id
      },
      event: ev,
      translucent: true
    });
    popover.present();
  }
  
  
  


}
