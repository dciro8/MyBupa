import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

constructor(private menuController:MenuController, private router: Router ){}

openMuenu(){
this.menuController.toggle();
}

logOut()
{
 this.router.navigate(['/']);
}

}

