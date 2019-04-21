import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SovellusService } from '../sovellus.service';
import { Kysely } from '../Kysely'


@Component({
  selector: 'app-pikahaku',
  templateUrl: './pikahaku.page.html',
  styleUrls: ['./pikahaku.page.scss'],
})
export class PikahakuPage implements OnInit {

  constructor(private modalCtrl : ModalController,
              private sovellus : SovellusService,
              private router : Router
              ) { }

  kokoaPikaKysely = (pikahaku : string) => {
    
    let uusiKysely : Kysely = {
      hakusana: "",
      tuotteet: pikahaku,
      toimipaikka: "",
      haunKohde: 'Yrityksen_nimi',
      haunMaara: "100",
      jarjestys: 'Nousevasti',
      tunnus: 'lts' 
    }

    this.sovellus.lahetaKysely(uusiKysely);

    this.modalCtrl.dismiss();
    this.router.navigateByUrl(`/tabs/tab2`);
  }

  ngOnInit() {
  }

  sulje = () =>{
    this.modalCtrl.dismiss();
  }
}
