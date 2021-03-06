import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  loadedBookings: Array<String> = [];
  constructor(private bookingsMenuCtrl: MenuController) { }


  bookingsMenu() {
    this.bookingsMenuCtrl.enable(true, 'bookingsMenu');
    this.bookingsMenuCtrl.open('bookingsMenu');
  }
}
