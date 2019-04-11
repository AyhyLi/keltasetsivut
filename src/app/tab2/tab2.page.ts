import { Component } from '@angular/core';
import { SovellusService } from '../sovellus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor (private sovellus : SovellusService, private router : Router){

    this.sovellus.tyhja2 = true;
  }

  avaa = (tiedot) => {

    this.sovellus.tyhja2 = false;
    this.sovellus.valittuKohde = tiedot;

    this.router.navigateByUrl(`/tabs/tab3`);
    console.log(tiedot);

  }



}
