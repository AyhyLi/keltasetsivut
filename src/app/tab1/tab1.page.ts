import { Component } from '@angular/core';
import { paikkakunnat } from '../kunnat';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  paikkakunta : any;

  constructor(private alertCtrl : AlertController){
    this.paikkakunta = paikkakunnat;
  }

  pikahaku = async () : Promise<any> =>{
    const ikkuna = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    });

    await ikkuna.present();
  }

  info = () =>{

  }
}
