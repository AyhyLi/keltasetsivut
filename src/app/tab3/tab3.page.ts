import { Component } from '@angular/core';
import "hammerjs";
import { SovellusService } from '../sovellus.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  

  constructor(private sovellus : SovellusService, private iab: InAppBrowser){
    
    //sovellus.tyhja2 = true;
  }

  avaaLinkki = (linkki) => {

    this.iab.create(linkki,`_blank`);

  }
  
  
  


}
