import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SovellusService } from '../sovellus.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popCTRL: PopoverController, private sovellus : SovellusService) { }

  ngOnInit() {
  }

  closePopover() {

    this.sovellus.lahetaKysely(this.sovellus.edellinenKysely);
    this.popCTRL.dismiss();
  }


}
