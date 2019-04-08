import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pikahaku',
  templateUrl: './pikahaku.page.html',
  styleUrls: ['./pikahaku.page.scss'],
})
export class PikahakuPage implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
  }

  sulje = () =>{
    this.modalCtrl.dismiss();
  }
}
