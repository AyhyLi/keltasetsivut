import { Component } from '@angular/core';
import { paikkakunnat } from '../kunnat';
import { AlertController, ModalController, MenuController } from '@ionic/angular';
import { SovellusService } from '../sovellus.service';
import { Kysely } from '../Kysely'
import { PikahakuPage } from '../pikahaku/pikahaku.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  paikkakunta : any;
  //palautus : string[] = [];
  //viesti1 : string = "";
  valittuHakusana : string = "";
  valittuToimiala : string = "";
  valittuToimipaikka : string = "";
  valittuMaara : string = "20";
  valittuJarjestys : string = "Nousevasti";

  constructor(private alertCtrl : AlertController,
              private modalCtrl : ModalController,
              private sovellus : SovellusService,
              private router : Router
              )
              {
    this.paikkakunta = paikkakunnat;
              }

  
  kokoaKysely = () => {
    this.valittuHakusana = this.valittuHakusana.trim();
    this.valittuToimiala = this.valittuToimiala.trim();
    this.valittuToimipaikka = this.valittuToimipaikka.trim();
    
    let uusiKysely : Kysely = {
      hakusana: this.valittuHakusana,
      tuotteet: this.valittuToimiala,
      toimipaikka: this.valittuToimipaikka,
      haunKohde: 'Yrityksen_nimi',
      haunMaara: this.valittuMaara,
      jarjestys: this.valittuJarjestys,
      tunnus: 'lts' 
    }

    this.sovellus.lahetaKysely(uusiKysely);
   
    
    this.router.navigateByUrl(`/tabs/tab2`);
    
    
    console.log(this.sovellus.hakutulos);
  }


  pikahaku = async () : Promise<any> =>{
    const modal = await this.modalCtrl.create({
      component: PikahakuPage,
      componentProps: {
      }
    });

    await modal.present();
  }

  info = async () : Promise<any> =>{
    const ikkuna = await this.alertCtrl.create({
      header: 'Info',
      message: 'Valitse hakuusi sopivat määritelmä alla olevista kentistä ja paina hae. Voit myös hakea yrityksiä jotka ovat lähellä sinua painamalla lähellä sinua napilla.',
      buttons: [
      {
        text:"Takaisin",
        role:"cancel"
      }
    ]
    });

    await ikkuna.present();
  }
}
