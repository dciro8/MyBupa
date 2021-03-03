import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController, MenuController } from '@ionic/angular';
import { PolicyMenber } from '../tab5/tab5.Model';
import { PoliceService } from '../tab5/tab5.services';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  policy: PolicyMenber = {};

constructor(private menuController:MenuController,private alertController: AlertController,private policeService:PoliceService, private router: Router) { }

async presentAlert(Message: string) {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Alert',
    subHeader: 'Subtitle',
    message: Message,
    buttons: ['OK']
  });

  await alert.present();
}


policeDetail() {
  this.policeService.getPolice(this.policy).subscribe(
    (res: PolicyMenber) => {
      console.log(res);

      this.presentAlert(JSON.stringify(res));
   console.log('sisisissisis');
      // this.router.navigate(['/tabs']);
    }
    , error => {
      this.presentAlert(JSON.stringify(error));
    });


  // this.router.navigate(['/tabs']);
}

openMuenu(){
this.menuController.toggle();
}

logOut()
{
 this.router.navigate(['/']);
}

}

