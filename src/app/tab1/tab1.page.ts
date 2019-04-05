import { Component } from '@angular/core';
import { paikkakunnat } from '../kunnat';
import { AlertController, ModalController, MenuController } from '@ionic/angular';
import { PikahakuPage } from '../pikahaku/pikahaku.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  paikkakunta : any;

  constructor(private alertCtrl : AlertController, private modalCtrl : ModalController){
    this.paikkakunta = paikkakunnat;
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
