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
  suunta : any;
  

  constructor(private sovellus : SovellusService, private iab: InAppBrowser, private popCTRL: PopoverController){
    
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
  
  pyyhkaisy = (ev :any, id :number)=>{
    let suunta = null;

    if(ev.direction == 2){
      //console.log("Vasen");
      suunta=0;
    }
    if(ev.direction == 4){
      //console.log("Oikea");
      suunta=1;
    }
   
    this.suunta = ev.direction;

    this.vaihdaYritys(suunta, id);
  }
  
  vaihdaYritys = (suunta:number, id:number)=>{
    if(suunta !=null){
     
      for(let i = 0;  i < this.sovellus.hakutulos.length; i++){
        if(this.sovellus.hakutulos[i].Id == id){

          if(suunta==0 && i <= this.sovellus.hakutulos.length - 2){

            this.sovellus.valittuKohde = this.sovellus.hakutulos[i+1];

            //tieto = this.sovellus.hakutulos[i+1];
          }
          if(suunta==1 && i >= 1){

            this.sovellus.valittuKohde = this.sovellus.hakutulos[i-1];

          }
        }
      }
     
    }
  }


}
